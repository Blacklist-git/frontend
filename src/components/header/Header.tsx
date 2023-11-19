import * as S from "./Header.style";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // 토큰이 존재하면 로그인 상태로 설정
      setLoggedIn(true);

      // 여기에서 유저 정보를 가져와서 userName 설정
      // 예: setUserName("유저이름");
    }
  }, []);

  const handleLogout = () => {
    // 로그아웃 처리
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUserName(""); // 로그아웃 시 userName 초기화
    navigate("/login");
  };

  return (
    <div>
      <S.header>
        <S.nav>
          <S.home>
            <Link to="/">BlackList</Link>
          </S.home>
          {/* <S.category>웹사이트 검증</S.category>
          <S.category>1:1 문의</S.category>
          <S.category>마이페이지</S.category> */}
          <S.category>
            <ul>
              <li>
                <Link to="/check">웹사이트 검증</Link>
              </li>
              <li>
                <Link to="/mypage">마이페이지</Link>
              </li>
              <li>
                <Link to="https://forms.gle/sSJKJr14EWxmfPXw9">1:1 문의</Link>
              </li>
            </ul>
          </S.category>
        </S.nav>
        <S.btns>
          <Link to="/login">
            <S.button backgroundColor="#b80103" color="white">
              Login
            </S.button>
          </Link>
          <Link to="/signup">
            <S.button backgroundColor="white" color="black">
              Sign up
            </S.button>
          </Link>
        </S.btns>
      </S.header>
    </div>
  );
};

export default Header;
