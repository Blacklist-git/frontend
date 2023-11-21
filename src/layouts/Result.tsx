//import Header from "../components/header/Header";
import * as S from "./Result.style";
import React from "react";
import reportImg from "../assets/img/reportImage.png";
import Header from "../components/header/Header";
import streamToBlob from "../hook/streamToBlob";

import ReactPDF, {
  Document,
  Page,
  View,
  Text,
  Font,
  StyleSheet,
  Image,
  PDFDownloadLink,
  PDFViewer,
  pdf,
} from "@react-pdf/renderer";
import { type } from "os";

Font.register({
  family: "NanumGothic",
  src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf",
});
interface ParsedData {
  option: string;
  url: string;
  nameData: string[];
  personalData: string[];
  content: string;
}

const styles = StyleSheet.create({
  image: { width: "100%", height: "100%", position: "absolute" },
  page: {
    // flexDirection: "row",
    // backgroundColor: "#fff",
    backgroundImage: `url(${reportImg})`,
    margin: 0,
  },
  viewer: {
    position: "relative",
    top: "30px",
  },

  text: {
    fontSize: 50,
    left: "0px",
    right: "0px",
    color: "#000",
    position: "absolute",
    marginHorizontal: "auto",
    justifyContent: "center",
    fontFamily: "NanumGothic",
  },
});

const Result = () => {
  const data = localStorage.getItem("myData");
  console.log("data : " + data);
  const parsedData = data
    ? JSON.parse(data).option === "website"
      ? (JSON.parse(data) as ParsedData)
      : JSON.parse(data)
    : null;
  // const parsedData: ParsedData | null = data ? JSON.parse(data) : null;
  console.log(parsedData);

  const date = new Date();
  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  var result;
  if (parsedData && parsedData.option === "website") {
    const url = parsedData.url;
    const nameCount = parsedData.nameData.length;
    const nameData = parsedData.nameData;
    const name = Array.isArray(nameData)
      ? nameData.map((nameItem: string) => `${nameItem} `).join("")
      : "";
    const personalData = parsedData.personalData;
    console.log("result " + parsedData);
    result = (
      <>
        {nameCount > 0 ? (
          <>
            <Text>{"\n"}</Text>
            {url}에서 찾은 <Text>{"\n"}</Text>
            이름으로 추정되는 것의 갯수 : {nameCount}
            <Text>{"\n"}</Text>
            이름으로 추정되는 것 : {name}
            {Array.isArray(personalData)
              ? personalData.map((item: any, index: any) => (
                  <Text key={index}>
                    <Text>{"\n"}</Text>
                    {item}
                  </Text>
                ))
              : ""}
            {"\n"}
          </>
        ) : null}
      </>
    );
  } else if (parsedData && parsedData.option == "api") {
    const content = "dfs";
    result = <Text>{content}</Text>;
  } else if (parsedData && parsedData.option == "csv") {
    // console.log(url)
  }
  const content = result;
  const pdfViewer = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Image
            style={{
              height: "99%",
              width: "99%",
              marginHorizontal: "auto",
            }}
            src={reportImg}
          ></Image>
          <Text
            id="title"
            style={{
              ...styles.text,
              top: "40px",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            BLACKLIST
          </Text>
          <Text
            style={{
              ...styles.text,
              top: "120px",
              left: "100px",
              fontSize: "18px",
              width: "400px",
              lineHeight: "1.8px",
            }}
          >
            일시 : {formattedDate}
            <Text>{content}</Text>
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View>
          <Image
            style={{
              height: "99%",
              width: "99%",
              marginHorizontal: "auto",
            }}
            src={reportImg}
          ></Image>
          <Text
            id="title"
            style={{
              ...styles.text,
              top: "40px",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            BLACKLIST
          </Text>
          <Text
            style={{
              ...styles.text,
              top: "120px",
              left: "100px",
              fontSize: "18px",
              width: "400px",
              lineHeight: "1.8px",
            }}
          >
            일시 : {formattedDate}
            <Text>{content}</Text>
          </Text>
        </View>
      </Page>
    </Document>
  );

  const DonwloadPdf = () => (
    <PDFDownloadLink document={pdfViewer()} fileName="Report.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );

  const savePDF = async () => {
    const pdfBlob = await pdf(pdfViewer()).toBlob(); // 수정된 부분
    const formData = new FormData();
    formData.append("pdfFile", pdfBlob);
    console.log(typeof pdfBlob);
    console.log(typeof formData);

    try {
      // 서버에 전송
      const response = await fetch(`http://127.0.0.1:8000/server/savePDF`, {
        method: "POST",
        credentials: "include",
        mode: "cors",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("PDF saved successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDownloadClick = () => {
    // 클라이언트가 서버에 있는 파일을 다운로드하도록 하는 로직
    // fetch("https://34.197.212.64:8000/server/download", {
    const encodedFileName = encodeURIComponent(parsedData.nameData);
    fetch(`http://127.0.0.1:8000/server/download?filename=${encodedFileName}`)
      // fetch(`http://34.197.212.64:8000/server/download?filename=${encodedFileName}`)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "file.csv";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <S.body>
        <Header />
        <S.container>
          {(parsedData && parsedData.option == "website") ||
          (parsedData && parsedData.option == "api") ? (
            <>
              <PDFViewer
                showToolbar={false}
                style={styles.viewer}
                width="32%"
                height="70%"
              >
                {pdfViewer()}
                {/* {savePDF()} */}
              </PDFViewer>
              <S.download onClick={savePDF}>
                <DonwloadPdf />
              </S.download>
            </>
          ) : (
            <>
              <S.download onClick={handleDownloadClick}>
                Download now!
              </S.download>
            </>
          )}
        </S.container>
      </S.body>
    </>
  );
};

export default Result;
