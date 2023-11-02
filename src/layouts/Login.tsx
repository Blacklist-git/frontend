import * as S from "./Login.style";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <S.body>
      <S.Login>
        <S.Title>
          <Link to="/">BlackList</Link>
        </S.Title>
        <S.inputName>아이디</S.inputName>
        <S.input placeholder="아이디를 입력하세요."></S.input>
        <S.inputName>비밀번호</S.inputName>
        <S.input placeholder="비밀번호를 입력하세요." type="password"></S.input>
        <S.LoginBtn>Login</S.LoginBtn>
        <S.SignUp>
          <Link to="/signup">Sign up</Link>
        </S.SignUp>
      </S.Login>
    </S.body>
  );
};

export default Login;
