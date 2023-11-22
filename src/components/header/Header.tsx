import * as S from "./Header.style";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserProvider, UserContext } from "../../hook/useContext";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const userData = useContext(UserContext);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isAuthenticated = !!localStorage.getItem("token");

      if (isAuthenticated && userData && userData.username) {
        try {
          setLoggedIn(true);
          setUserName(userData.username);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
    };

    checkLoginStatus();
  }, [userData]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    setUserName("");
    navigate("/");
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
        {isLoggedIn ? (
          <S.btns>
            <S.button
              onClick={handleLogout}
              backgroundColor="#b80103"
              color="white"
            >
              Logout
            </S.button>
            <S.name>{userName}님</S.name>
          </S.btns>
        ) : (
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
        )}
      </S.header>
    </div>
  );
};

export default Header;
