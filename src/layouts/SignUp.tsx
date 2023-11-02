import * as S from "./SignUP.style";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  return (
    <S.body>
      <S.SignUp>
        <S.Title>
          <Link to="/">BlackList</Link>
        </S.Title>
        <S.inputName>아이디</S.inputName>
        <S.input placeholder="아이디를 입력하세요."></S.input>
        <S.inputName>비밀번호</S.inputName>
        <S.input placeholder="비밀번호를 입력하세요." type="password"></S.input>
        <S.inputName></S.inputName>
        <S.input placeholder="비밀번호 확인" type="password"></S.input>
        <S.inputName>이메일</S.inputName>
        <S.Email>
          <S.inputEmail></S.inputEmail>@
          <S.selectEmail>
            <option value="gmail.com">gamil.com</option>
            <option value="naver.com">naver.com</option>
          </S.selectEmail>
        </S.Email>
        <S.LoginBtn>Sign Up</S.LoginBtn>
      </S.SignUp>
    </S.body>
  );
};

export default SignUp;
