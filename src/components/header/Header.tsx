import * as S from "./Header.style";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
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
