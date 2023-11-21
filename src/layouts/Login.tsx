import * as S from "./Login.style";
import * as C from "../components/components.style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const handlePwCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwCheck(event.target.value);
  };
  const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };

  const handleFormSubmit = () => {
    if (id === "") {
      alert("아아디를 입력해주세요.");
      return;
    }
    if (pw === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    const dataToSend = {
      idSend: id,
      pwSend: pw,
    };

    console.log(dataToSend);
    // fetch(`https://34.197.212.64:8000/server/login`, {
    fetch(`http://127.0.0.1:8000/server/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          alert("로그인에 실패하였습니다.");
          throw new Error("Network response was not ok");
        }
        alert("로그인이 되었습니다.");
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        localStorage.setItem("token", data.access_token);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <S.body>
      <S.Login>
        <C.Title>
          <Link to="/">BlackList</Link>
        </C.Title>
        <C.inputName>아이디</C.inputName>
        <C.input
          placeholder="아이디를 입력하세요."
          onChange={handleIdChange}
        ></C.input>
        <C.inputName>비밀번호</C.inputName>
        <C.input
          placeholder="비밀번호를 입력하세요."
          type="password"
          onChange={handlePwChange}
        ></C.input>
        <C.LoginBtn onClick={handleFormSubmit}>Login</C.LoginBtn>
      </S.Login>
    </S.body>
  );
};

export default Login;
