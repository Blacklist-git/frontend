//import Header from "../components/header/Header";
import * as S from "./Result.style";
import React from "react";
import reportImg from "../assets/img/reportImage.png";
import Header from "../components/header/Header";

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
import { backgroundImage } from "html2canvas/dist/types/css/property-descriptors/background-image";

Font.register({
  family: "NanumGothic",
  src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf",
});
Font.register({
  family: "NanumGothicBold",
  src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Bold.ttf",
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
  subtitle: {
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
    const personalData = parsedData.personalData;
    console.log("result " + parsedData);
    result = (
      <>
        {nameCount > 0 ? (
          <>
            <Text>{"\n"}</Text>
            이름으로 추정되는 것의 갯수 : {nameCount}
            <Text>{"\n"}</Text>
            <Text>이름 : </Text>
            {Array.isArray(nameData)
              ? nameData.map((name: any, index: any) => (
                  <Text key={index}>{name}</Text>
                ))
              : ""}
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
      {/* 1번 */}
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
              top: "260px",
              textAlign: "center",
              fontSize: "60px",
              fontWeight: "bold",
              fontFamily: "NanumGothicBold",
            }}
          >
            BLACKLIST
          </Text>
          <Text
            id="subtitle"
            style={{
              ...styles.text,
              top: "350px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            개인정보 검출 보고서
          </Text>
        </View>
      </Page>
      {/* 2번 */}
      <Page size="A4" style={{ ...styles.page, backgroundColor: "black" }}>
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
              top: "80px",
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "60px",
              fontSize: "23px",
              fontFamily: "NanumGothicBold",
            }}
          >
            개인정보 검출 보고서
          </Text>
          <hr
            style={{
              border: "1.2px solid black",
              width: "80%",
              marginLeft: "60px",
              position: "absolute",
              // marginHorizontal: "auto",
              top: "130px",
            }}
          />
          <Text
            style={{
              ...styles.text,
              top: "240px",
              left: "70px",
              fontSize: "15px",
              width: "400px",
              lineHeight: "3px",
            }}
          >
            일시 : {formattedDate}
            {"\n대상 url : " + parsedData.url}
            {"\n탐지분야 : 웹사이트 검증"}
          </Text>
        </View>
      </Page>
      {/* 3번 */}
      <Page size="A4" style={{ ...styles.page, backgroundColor: "black" }}>
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
              top: "80px",
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "60px",
              fontSize: "23px",
              fontFamily: "NanumGothicBold",
            }}
          >
            프로젝트 개요
          </Text>
          <hr
            style={{
              border: "1.2px solid black",
              width: "80%",
              marginLeft: "60px",
              position: "absolute",
              // marginHorizontal: "auto",
              top: "130px",
            }}
          />
          <Text
            style={{
              ...styles.text,
              top: "180px",
              left: "60px",
              fontSize: "15px",
              width: "490px",
              lineHeight: "1.5px",
            }}
          >
            {
              " 본 보고서의 내용을 인용할 때는 반드시 인용 가능한 데이터인지 확인하고, 가명화 처리가 되지 않은 데이터는 인용할 수 없음을 주의해야 합니다.\n\n"
            }
            {
              "검출된 데이터는 정확하지 않을 수 있으며, 만일 개인정보가 검출되었다면 해당 URL에 검출되지 않은 개인정보가 있는지 확인하는 것이 필요합니다.\n\n"
            }
            {
              "개인정보 검출 정도에 따라 심각도가 A, B, C, D 총 4단계로 나뉩니다. (D: 주의, C: 경고, B: 심각, A: 서버 중지)\n\n"
            }
            {
              "개인정보 유출은 평판 손상, 수익 손실, 신뢰성 저하 등의 문제를 야기할 수 있습니다.\n\n"
            }
            {
              "유출된 정보를 검출하여 개인 정보 처리의 중요성과 위험성을 논의하며, 동시에 완화 전략을 제시하고자 합니다."
            }
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
            style={{
              ...styles.text,
              top: "120px",
              left: "100px",
              fontSize: "18px",
              width: "400px",
              lineHeight: "1.8px",
            }}
          >
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
              <S.csv>
                <S.title>Example</S.title>
                <S.exampleBox>
                  <p>
                    홍길동 28세 남성 서울 마포구 01012232312 --{">"} 홍*동 20대
                    남성 서울 거주 010*******2
                  </p>
                </S.exampleBox>
                <S.download onClick={handleDownloadClick} color={"20%"}>
                  Download now!
                </S.download>
              </S.csv>
            </>
          )}
        </S.container>
      </S.body>
    </>
  );
};

export default Result;
