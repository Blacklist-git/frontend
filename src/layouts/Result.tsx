//import Header from "../components/header/Header";
import * as S from "./Result.style";
import { useEffect } from "react";

import reportImg from "../assets/img/reportImage.png";
import exampleImg from "../assets/img/examplecode.png";
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
  Link,
} from "@react-pdf/renderer";
import { type } from "os";
import { backgroundImage } from "html2canvas/dist/types/css/property-descriptors/background-image";
import { parse } from "path";

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
  useEffect(() => {
    handleCreateClick();
  }, []);
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
  const primaryDate = `${date.getFullYear()}${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}${date
    .getHours()
    .toString()
    .padStart(2, "0")}${date.getMinutes().toString().padStart(2, "0")}${date
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

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
              top: "100px",
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "80px",
              fontSize: "29px",
              fontFamily: "NanumGothicBold",
            }}
          >
            개인정보 검출 보고서
          </Text>
          <hr
            style={{
              border: "0.8px solid black",
              width: "90%",
              marginLeft: "80px",
              position: "absolute",
              // marginHorizontal: "auto",
              top: "170px",
            }}
          />
          <Text
            style={{
              ...styles.text,
              top: "200px",
              left: "80px",
              fontSize: "18px",
              width: "400px",
              lineHeight: "3px",
            }}
          >
            {parsedData.url.replace("https://", "")}
          </Text>
          <Text
            style={{
              ...styles.text,
              top: "300px",
              left: "80px",
              fontSize: "18px",
              width: "400px",
              lineHeight: "3px",
            }}
          >
            일시 {"\n탐지분야 "}
            {"\n보안등급 "}
          </Text>
          <Text
            style={{
              ...styles.text,
              top: "300px",
              left: "250px",
              fontSize: "18px",
              width: "400px",
              lineHeight: "3px",
            }}
          >
            {formattedDate}
            {"\n웹사이트 검증"}
            {"\n"}
            {parsedData.grade}
          </Text>
        </View>
      </Page>
      {/* 4번 */}
      <Page size="A4" style={{ ...styles.page }}>
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
              top: "100px",
              textAlign: "center",
              fontSize: "30px",
            }}
          >
            BLACKLIST
          </Text>
          <Text
            style={{
              ...styles.text,
              top: "220px",
              left: "80px",
              fontSize: "18px",
              width: "400px",
              lineHeight: "3px",
            }}
          >
            {"1. 프로젝트 개요\n"}
            {"2. 페이지 분석 결과\n"}
            {"3. 개인정보 처리\n"}
            {"4. 개인정보 가명화 처리 방침"}
          </Text>
        </View>
      </Page>
      {/* 5번 */}
      <Page size="A4" style={{ ...styles.page }}>
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
              top: "100px",
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "60px",
              fontSize: "29px",
              fontFamily: "NanumGothicBold",
            }}
          >
            프로젝트 개요
          </Text>
          <hr
            style={{
              border: "0.8px solid black",
              width: "82%",
              marginLeft: "55px",
              position: "absolute",
              // marginHorizontal: "auto",
              top: "170px",
            }}
          />
          <Text
            style={{
              ...styles.text,
              top: "210px",
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
            id="title"
            style={{
              ...styles.text,
              top: "80px",
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "60px",
              fontSize: "29px",
              fontFamily: "NanumGothicBold",
            }}
          >
            분석 결과
          </Text>
          <hr
            style={{
              border: "0.8px solid black",
              width: "82%",
              marginLeft: "55px",
              position: "absolute",
              // marginHorizontal: "auto",
              top: "150px",
            }}
          />
          <Text
            style={{
              ...styles.text,
              top: "180px",
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "60px",
              fontSize: "18px",
            }}
          >
            {parsedData.url.replace("https://", "")}
          </Text>
          <Text
            style={{
              ...styles.text,
              top: "240px",
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "140px",
              fontSize: "20px",
              fontFamily: "NanumGothicBold",
            }}
          >
            구분
          </Text>
          <Text
            style={{
              ...styles.text,
              top: "240px",
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "370px",
              fontSize: "20px",
              fontFamily: "NanumGothicBold",
            }}
          >
            문제 개수
          </Text>
          <hr
            style={{
              border: "1.7px solid lightgrey",
              width: "75%",
              marginLeft: "80px",
              position: "absolute",
              // marginHorizontal: "auto",
              top: "300px",
            }}
          />
          <Text
            style={{
              ...styles.text,
              top: "340px",
              marginRight: "265px",
              fontSize: "18px",
              textAlign: "center",
              lineHeight: "2.5px",
            }}
          >
            {"이름\n"}
            {Array.isArray(parsedData.personalData)
              ? parsedData.personalData.map((item: any, index: any) => (
                  <>
                    {item.split(":")[0]}
                    {"\n"}
                  </>
                ))
              : ""}
          </Text>
          <Text
            style={{
              ...styles.text,
              top: "340px",
              marginLeft: "230px",
              fontSize: "18px",
              textAlign: "center",
              lineHeight: "2.5px",
            }}
          >
            {parsedData.nameData.length}
            {"\n"}
            {Array.isArray(parsedData.personalData)
              ? parsedData.personalData.map((item: any, index: any) => (
                  <>
                    {parsedData.count[index + parsedData.personalData.length]}
                    {"\n"}
                  </>
                ))
              : ""}
          </Text>
          <Text
            style={{
              ...styles.text,
              top: "700px",
              left: "400px",
              fontSize: "15px",
              lineHeight: "1.8px",
            }}
          >
            <Link src={link}>[검출된 정보 확인]</Link>
          </Text>
        </View>
      </Page>
      <Page size="A4" style={{ ...styles.page }}>
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
              top: "100px",
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "60px",
              fontSize: "29px",
              fontFamily: "NanumGothicBold",
            }}
          >
            개인정보 처리
          </Text>
          <hr
            style={{
              border: "0.8px solid black",
              width: "82%",
              marginLeft: "55px",
              position: "absolute",
              // marginHorizontal: "auto",
              top: "170px",
            }}
          />
          <Text
            style={{
              ...styles.text,
              top: "210px",
              left: "60px",
              fontSize: "15px",
              width: "490px",
              lineHeight: "1.5px",
            }}
          >
            {
              "  2020년 8월, 정부의 데이터 3법이 시행되면서 데이터 활용을 위한 가명정보 개념이 도입되며, 개인정보 또는 개인신용정보에 대하여 가명처리(비식별조치) 한 가명정보를 정보주체의 동의 없이 이용∙제공할 수 있습니다\n\n"
            }
            {
              " Blacklist는 수집한 개인정보를 주체에게 제공하고, 가명화 처리 방법을 제공합니다. 수집한 개인정보는 보고서에 작성된 즉시 데이터를 삭제합니다. 개인정보를 상업적으로 이용하지 않음을 알려드립니다\n\n"
            }
            {
              "개인의 존엄과 가치를 구현하기 위하여 2011년 개인정보 보호법이 제정ㆍ시행되었습니다. \n\n"
            }
          </Text>
        </View>
      </Page>
      <Page size="A4" style={{ ...styles.page }}>
        <View>
          <Image
            style={{
              height: "99%",
              width: "99%",
              marginHorizontal: "auto",
            }}
            src={exampleImg}
          ></Image>
          <Text
            id="title"
            style={{
              ...styles.text,
              top: "100px",
              textAlign: "left",
              fontWeight: "bold",
              marginLeft: "60px",
              fontSize: "29px",
              fontFamily: "NanumGothicBold",
            }}
          >
            개인정보 가명화
          </Text>
          <hr
            style={{
              border: "0.8px solid black",
              width: "82%",
              marginLeft: "55px",
              position: "absolute",
              // marginHorizontal: "auto",
              top: "170px",
            }}
          />
          <Text
            style={{
              ...styles.text,
              top: "530px",
              left: "60px",
              fontSize: "15px",
              width: "490px",
              lineHeight: "1.5px",
            }}
          >
            {
              " 이 코드는 mask_names 함수를 사용하여 주어진 텍스트에서 각 이름을 찾아서 '*'로 마스킹 처리합니다.\n\n"
            }
            {
              " 개인정보 검출 시에는 삭제를 우선시해야 하며, 가명화는 선택적으로 사용되어야 합니다. 가명화된 데이터 역시 보안에 취약할 수 있으므로 민감한 정보의 경우 적절한 안전성을 고려해야 합니다.\n\n"
            }
            {
              " 개인정보 처리 가이드라인은 2020년 9월에 발표되었으며, 2021년 10월에 개정되었습니다. 가명처리 영역 전체 흐름도에 나오는 단계를 지키며 개인정보 가명화 처리가 이루어지는 것이 바람직합니다.\n\n"
            }
          </Text>
        </View>
      </Page>
    </Document>
  );

  const link = "http://127.0.0.1:8000/server/download_txt/" + primaryDate;
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
  const handleCreateClick = () => {
    const nameCount = parsedData.nameData.length;
    const nameData = parsedData.nameData;
    const personalData = parsedData.personalData;
    const data = `
  ${nameCount > 0 ? `이름 : ${nameData.join(", ")}` : ""}
  ${
    personalData.length > 0
      ? `개인정보 : ${personalData
          .map((item: any, index: any) => `${item}`)
          .join(", ")}`
      : ""
  }
`;
    console.log(primaryDate);
    fetch("http://127.0.0.1:8000/server/create_file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data, file_name: primaryDate }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("File creation successful:", data);
      })
      .catch((error) => {
        console.error("Error creating file:", error);
      });
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
              <S.download onClick={handleCreateClick}>sdf</S.download>
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
