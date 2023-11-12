import Main from "./pages/Main";
import Check from "./pages/Check";
import Login from "./pages/Login";
import SignUp from "./pages/SignUP";
import Mypage from "./pages/Mypage";
import Result from "./pages/Result";
import Confirm from "./pages/Confirm";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { useState, useEffect } from "react";

import * as S from "./App.style";

function App() {
  const [lightPosition, setLightPosition] = useState({ x: 0, y: 0 });
  const [inputBtnLighted, setInputBtnLighted] = useState(false);

  const handleMouseMove = (event: MouseEvent) => {
    setLightPosition({ x: event.clientX, y: event.clientY });
    const targetElement = document.elementFromPoint(
      event.clientX,
      event.clientY,
    );
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <S.body>
      <S.Light lightPosition={lightPosition} lighted={inputBtnLighted} />
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
              <Route path="/confirm" element={<Confirm />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </S.container>
    </S.body>
  );
}

export default App;
