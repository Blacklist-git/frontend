import Header from "../components/header/Header";
import * as S from "./Check.style";
import * as C from "../components/components.style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Check = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [urlToSend, setUrlToSend] = useState("");
  const [selectedOption, setSelectedOption] = useState("website");
  const [dataSend, setDataSend] = useState<FormData | null>(null);
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

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (
      (selectedOption !== "csv" && urlToSend === "") ||
      (selectedOption === "csv" && dataSend === null)
    ) {
      if (selectedOption === "csv") {
        alert("파일을 선택해주세요");
      } else {
        alert("url을 입력해주세요");
      }
      setLoading(false);
      return;
    }
    if (selectedOption === "csv" && placeholder.slice(-4) !== ".csv") {
      alert("csv파일만 업로드해주세요.");
      setLoading(false);
      return;
    }

    // const dataType =
    //   selectedOption === "csv"
    //     ? { file: dataSend, option: selectedOption }
    //     : { url: urlToSend, option: selectedOption };

    const dataToSend = {
      url: urlToSend,
      option: selectedOption,
    };
    const contentType =
      selectedOption === "website" ? "application/json" : "multipart/form-data";

    const requestOptions: RequestInit = {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body:
        selectedOption === "website" ? JSON.stringify(dataToSend) : dataSend,
    };

    if (selectedOption === "website") {
      requestOptions.headers = {
        "Content-Type": contentType,
      };
    }

    fetch(`https://34.197.212.64:8000/server/${selectedOption}`, requestOptions)
      // fetch(`http://127.0.0.1:8000/server/${selectedOption}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        localStorage.clear();
        return selectedOption === "website"
          ? response.json()
          : response.formData;
      })
      .then((data) => {
        console.log(data);
        if (selectedOption === "website") {
          localStorage.setItem("myData", JSON.stringify(data));
          setLoading(false);
          navigate("/confirm");
        } else if (selectedOption === "csv") {
          setLoading(false);
          navigate("/result");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };
  return (
    <S.Body>
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
          <C.ResultBtn>Loading...</C.ResultBtn>
        ) : (
          <C.ResultBtn>
            <Link to="/confirm" onClick={handleFormSubmit}>
              결과 보기
            </Link>
          </C.ResultBtn>
        )}
      </S.Container>
    </S.Body>
  );
};

export default Check;
