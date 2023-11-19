import * as S from "./Mypage.style";
import React, { useState } from "react";
import Header from "../components/header/Header";
import profile from "../assets/img/profile.webp";
import edit from "../assets/img/editProfile.svg";
import download from "../assets/img/download.png";
import analList from "../data/analList";
import { Navigate } from "react-router-dom";

const Mypage = () => {
  const [open, setOpen] = useState(false);
  const isAuthenticated = !!localStorage.getItem("token");
  const token = localStorage.getItem("token");
  console.log(token);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // const downloadFile = (url: string) => {
  //   url = "파일에 대한 url";

  //   fetch(url, { method: "GET" })
  //     .then((res) => {
  //       return res.blob();
  //     })
  //     .then((blob) => {
  //       const url = window.URL.createObjectURL(blob);
  //       const a = document.createElement("a");
  //       a.href = url;
  //       a.download = "파일명";
  //       document.body.appendChild(a);
  //       a.click();
  //       setTimeout(() => {
  //         window.URL.revokeObjectURL(url);
  //       }, 60000);
  //       a.remove();
  //       setOpen(false);
  //     })
  //     .catch((err) => {
  //       console.error("err: ", err);
  //     });
  // };
  const downloadFile = (url: string) => {
    console.log(url);
    fetch(url, { method: "GET" })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "blacklist.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        setOpen(false);
      })
      .catch((err) => {
        console.error("err: ", err);
      });
  };

  return (
    <S.body>
      <Header />
      <S.container>
        <S.analContainer>
          <p>분석기록</p>
          {analList.map(({ date, url, pdf }, index) => (
            <S.analBox key={index}>
              <S.analInfo>
                <li>{date}</li>
                <li>url : {url}</li>
                <li>
                  PDF{" "}
                  <img
                    src={download}
                    onClick={() =>
                      downloadFile(
                        "https://drive.google.com/file/d/1GmknuFCvvT2_da6MNcN_wBZc-tAd6mtO/view?usp=sharing",
                      )
                    }
                  />
                </li>
              </S.analInfo>
            </S.analBox>
          ))}
        </S.analContainer>
        {/* <S.profileInfo>
          <S.profile>
            <S.profileImg src={profile} />
            <S.edit src={edit} />
          </S.profile>
          <S.name>Name</S.name>
        </S.profileInfo> */}
      </S.container>
    </S.body>
  );
};

export default Mypage;
