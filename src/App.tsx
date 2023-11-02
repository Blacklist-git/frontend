import Main from "./pages/Main";
import Check from "./pages/Check";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import Mypage from "./pages/Mypage";
import Result from "./pages/Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import * as S from "./App.style";

function App() {
  return (
    <S.body>
      <S.container>
        <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/check" element={<Check />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </S.container>
    </S.body>
  );
}

export default App;
