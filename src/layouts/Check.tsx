import Header from "../components/header/Header";
import * as S from "./Check.style";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRef } from "react";

const Check = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [urlToSend, setUrlToSend] = useState("");
  const [selectedOption, setSelectedOption] = useState("website");
  const [dataSend, setDataSend] = useState<FormData | string>("empty");
  const [placeholder, setPlaceholder] = useState("파일을 선택해주세요");
  // const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });

  // const [inputBtnLighted, setInputBtnLighted] = useState(false);

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlToSend(event.target.value);
  };

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = event.target.files?.[0];
    if (data) {
      const formData = new FormData();
      formData.append("file", data);
      setDataSend(formData);
      setPlaceholder(data.name);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const [localStorageSet, setLocalStorageSet] = useState(false);

const handleFormSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  setLoading(true);

  // 이전에 저장된 데이터가 없는 경우에만 실행
  if (!localStorageSet) {
    const dataType =
      selectedOption === "csv"
        ? { file: dataSend, option: selectedOption }
        : { url: urlToSend, option: selectedOption };

    const apiUrlType = selectedOption === "csv" ? "file" : `crawl/${urlToSend}`;
    const data = dataType;

    fetch(`http://127.0.0.1:8000/${apiUrlType}/${selectedOption}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("myData", JSON.stringify(data));
        setLocalStorageSet(true);
        setLoading(false);
        navigate("/result");
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  } else {
    setLoading(false);
    navigate("/result");
  }
};


  // const handleMouseMove = (event: MouseEvent) => {
  //   setLightPosition({ x: event.clientX, y: event.clientY });
  //   const targetElement = document.elementFromPoint(
  //     event.clientX,
  //     event.clientY,
  //   );
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []); // Add event listener on mount and remove on unmount

  return (
    <S.Body>
      {/* <S.Light /> */}
      <Header />
      <S.Container>
        <S.Title>Protect your website</S.Title>
        <S.InputUrl>
          {selectedOption === "csv" ? (
            <S.File>
              {placeholder}
              <S.FileUpload onChange={handleDataChange} />
            </S.File>
          ) : (
            <S.Input
              placeholder="Text your URL"
              value={urlToSend}
              onChange={handleUrlChange}
            />
          )}
          <S.InputBtn>
            <S.Select value={selectedOption} onChange={handleSelectChange}>
              <option value="website">웹사이트 검증</option>
              <option value="api">API 분석</option>
              <option value="csv">csv파일 처리</option>
            </S.Select>
          </S.InputBtn>
        </S.InputUrl>
        {loading ? (
          <S.ResultBtn>Loading...</S.ResultBtn>
        ) : (
          <S.ResultBtn>
            <Link to="/confirm" onClick={handleFormSubmit}>
              결과 보기
            </Link>
          </S.ResultBtn>
        )}
      </S.Container>
    </S.Body>
  );
};

export default Check;
