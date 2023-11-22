import * as S from "./SignUP.style";
import * as C from "../components/components.style";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const handlePwCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwCheck(event.target.value);
  };
  const handlePwChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPw(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleFormSubmit = () => {
    if (id === "") {
      alert("아아디를 입력해주세요.");
      return;
    }
    if (pw === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    } else if (pw !== pwCheck) {
      alert("비밀번호를 다시 확인해주세요.");
      return;
    }
    if (name === "") {
      alert("이름을 입력해주세요.");
      return;
    }
    // if (email === "") {
    //   alert("이메일을 입력해주세요.");
    //   return;
    // }

    const dataToSend = {
      idSend: id,
      pwSend: pw,
      nameSend: name,
      // emailSend: email,
    };

    // fetch(`https://34.197.212.64:8000/server/register`, {
    fetch(`http://127.0.0.1:8000/server/register`, {
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
          throw new Error("Network response was not ok");
        }
        alert("회원가입이 되었습니다.");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const checkDuplicate = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(
        // `https://34.197.212.64:8000/server/register`,
        `http://127.0.0.1:8000/server/check_duplicate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          mode: "cors",
          body: JSON.stringify({ idSend: id }),
        },
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      handleFormSubmit();
    } catch (error) {
      console.error("Error:", error);
      alert("아이디가 이미 존재합니다.");
    }
  };
  return (
    <S.body>
      <S.SignUp>
        <C.Title>
          <Link to="/">BlackList</Link>
        </C.Title>
        <C.inputName>Name</C.inputName>
        <C.input placeholder="이름을 입력하세요." onChange={handleNameChange} />
        <C.inputName>아이디</C.inputName>
        <C.input placeholder="아이디를 입력하세요." onChange={handleIdChange} />
        <C.inputName>비밀번호</C.inputName>
        <C.input
          placeholder="비밀번호를 입력하세요."
          type="password"
          onChange={handlePwChange}
        ></C.input>
        <C.inputName></C.inputName>
        <C.input
          placeholder="비밀번호 확인"
          type="password"
          onChange={handlePwCheckChange}
        />
        {/* <S.inputName>이메일</S.inputName>
        <S.Email>
          <S.inputEmail
            placeholder="이메일을 입력하세요"
            onChange={handleEmailChange}
          />
          @
          <S.selectEmail>
            <option value="gmail.com">gamil.com</option>
            <option value="naver.com">naver.com</option>
          </S.selectEmail>
        </S.Email> */}
        <C.LoginBtn onClick={checkDuplicate}>Sign Up</C.LoginBtn>
      </S.SignUp>
    </S.body>
  );
};

export default SignUp;
