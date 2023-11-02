import * as S from "./Main.style";
import Header from "../components/header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <S.Logo src={"images/blacklist_logo.svg"} />
      <S.Info>
        <S.InfoHeader>We will protect your personal information.</S.InfoHeader>
        <S.InfoTxt>
          You may be under attack from hackers. But that's okay. we prevent it
        </S.InfoTxt>
      </S.Info>
    </div>
  );
};

export default Main;
