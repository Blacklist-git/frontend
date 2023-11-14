//import Header from "../components/header/Header";
import * as S from "./Result.style";
import onPdfDownload from "../hook/onPdfDownload";
import React from "react";
import reportImg from "../assets/img/reportImage.png";

import {
  Document,
  Page,
  View,
  Text,
  Font,
  StyleSheet,
  Image,
  PDFDownloadLink,
  pdf,
} from "@react-pdf/renderer";

Font.register({
  family: "NanumGothic",
  src: "https://fonts.gstatic.com/ea/nanumgothic/v5/NanumGothic-Regular.ttf",
});

const styles = StyleSheet.create({
  image: { width: "100%", height: "100%", position: "absolute" },
  page: {
    // flexDirection: "row",
    // backgroundColor: "#fff",
    backgroundImage: `url(${reportImg})`,
    margin: 0,
  },
  // BlackList: {
  //   width: '81vh',
  //   height: '700px',
  //   textAlign: 'center',
  //   color: '#AA0002',
  //   fontSize: '208px',
  //   transform: 'rotate(-16.97deg)',
  //   top: '700px',
  //   fontStyle: 'bold',
  // whiteSpace: 'nowrap',
  // overflow: 'hidden',
  // textOverflow: 'ellipsis',

  //},

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

  // Report: {
  //   width: "100%",
  //   textAlign: "center",
  //   fontSize: "100px",
  //   color: '#AA0002',
  //   top: '100px',
  //   transform: 'rotate(-16.97deg)',
  //   left: '350px',
  // }
});

const Result = () => {
  const data = localStorage.getItem("myData");
  var parsedData;
  if (data !== null) {
    parsedData = JSON.parse(data);
    // 이제 parsedData는 유효한 JSON 문자열로 파싱됐을 것입니다.
  } else {
    console.log("Data not found in localStorage");
  }
  const date = new Date();
  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  const nameData = parsedData.nameData?.split(",");
  const nameCount = nameData[2];

  var result;
  if (parsedData.option == "website") {
    const nameData = parsedData.nameData?.split(",");
    const personalData = parsedData.personalData?.split(",");

    const url = nameData[1];
    if (nameData[2]) Number(nameData[2].replace("{", "").replace("}", ""));
    const nameCount = nameData[2];
    const name = nameData[3]; // 이렇게 해놓으면 이름 하나 밖에 안나옴. 여러 개 검출 되었을 때 어찌할지 생각해야함.

    result = (
      <Text>
        {url}에서 찾은 이름으로 추정되는 것의 갯수 : {nameCount}
        {"\n"}
        이름으로 추정되는 것 : {name}
        {personalData.map((item: any, index: any) => (
          <Text key={index}>{item}</Text>
        ))}
        {"\n"}
      </Text>
    );
  } else if (parsedData.option == "api") {
    const content = parsedData.content;
    result = <Text>{content}</Text>;
  } else if (parsedData.option == "csv") {
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
            {"\n"}
            <Text>{content}</Text>
          </Text>
        </View>
      </Page>
    </Document>
  );
  const DownloadLink = () => (
    <PDFDownloadLink document={pdfViewer()} fileName="document.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );

  return <>{pdfViewer()}</>;
};

export default Result;
