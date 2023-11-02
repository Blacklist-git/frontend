import Header from "../components/header/Header";
import * as S from "./Check.style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Check = () => {
  const navigate = useNavigate();
  const [urlToSend, setUrlToSend] = useState(""); // URL 값을 상태로 관리
  const [selectedOption, setSelectedOption] = useState("website"); // 기본값 설정
  // const [dataSend, setDataSend] = useState<File | string>("empity");
  const [dataSend, setDataSend] = useState<FormData | string>("empty");
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 입력 필드의 값이 변경될 때 호출되는 함수
    setUrlToSend(event.target.value); // 입력 필드의 값으로 상태 업데이트
  };

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.files?.[0];
    if (data) {
      const formData = new FormData();
      formData.append("file", data);
      setDataSend(formData);

      setSelectedFileName(data.name);
    }
  };

  // select 요소의 변경 핸들러
  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    if (
      (selectedOption != "csv" && urlToSend == "") ||
      (selectedOption == "csv" && dataSend == "empity")
    ) {
      if (selectedOption == "csv") {
        alert("파일을 선택해주세요");
      } else {
        alert("url을 입력해주세요");
      }
      return false;
    }
    // alert(typeof dataSend);
    var dataType = {};
    var apiUrlType = ``;
    if (selectedOption == "csv") {
      dataType = { file: dataSend, option: selectedOption };
      apiUrlType = "file";
    } else {
      dataType = { url: urlToSend, option: selectedOption };
      apiUrlType = `crawl/${urlToSend}`; // 백엔드 API 엔드포인트 URL
    }
    const data = dataType;
    const apiUrl =
      "http://127.0.0.1:8000/" + `${apiUrlType}` + `/${selectedOption}`;
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // 백엔드에서의 응답 처리
        localStorage.setItem("myData", JSON.stringify(data));
        navigate("/result");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <S.body>
      <Header />
      <S.container>
        <S.Title>Protect your website</S.Title>
        <S.inputUrl>
          {selectedOption == "csv" ? (
            // "csv"가 선택된 경우
            // <S.csvButton>
            <S.file onChange={handleDataChange} />
          ) : (
            /* </S.csvButton>  */
            <S.input
              placeholder="Text your URL"
              value={urlToSend}
              onChange={handleUrlChange}
            />
          )}
          <S.inputBtn>
            {/* <S.select> */}
            <S.select value={selectedOption} onChange={handleSelectChange}>
              <option value="webstie">웹사이트 검증</option>
              <option value="api">API 분석</option>
              <option value="csv">csv파일 분석</option>
            </S.select>
          </S.inputBtn>
        </S.inputUrl>
        <S.resultBtn>
          <Link to="/result/" onClick={handleFormSubmit}>
            결과 보기
          </Link>
        </S.resultBtn>
      </S.container>
    </S.body>
  );
};

export default Check;
