import Header from "../components/header/Header";
import * as S from "./Result.style";
import onPdfDownload from "../hook/onPdfDownload";

const Result = () => {
  const data = localStorage.getItem("myData");
  var parsedData;
  if (data !== null) {
    parsedData = JSON.parse(data);
    // 이제 parsedData는 유효한 JSON 문자열로 파싱됐을 것입니다.
  } else {
    console.log("Data not found in localStorage");
  }
  console.log(parsedData);
  const date = new Date();
  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  var result;
  if (parsedData.option == "website") {
    const nameData = parsedData.nameData?.split(",");
    const personalData = parsedData.personalData?.split(",");

    const url = nameData[1];
    const nameCount = Number(nameData[2].replace("{", "").replace("}", ""));
    const name = nameData[3]; // 이렇게 해놓으면 이름 하나 밖에 안나옴. 여러 개 검출 되었을 때 어찌할지 생각해야함.

    result = (
      <span>
        {url}에서 찾은
        <br />
        이름으로 추정되는 것의 갯수 : {nameCount}
        <br></br>
        이름으로 추정되는 것 : {name}
        <br />
        {personalData.map((item: any, index: any) => (
          <span key={index}>
            {item}
            <br />
          </span>
        ))}
      </span>
    );
  } else if (parsedData.option == "api") {
    const content = parsedData.content;
    result = <span>{content}</span>;
  } else if (parsedData.option == "csv") {
    // console.log(url)
  }
  const content = result;

  const handleDownloadPdf = () => {
    onPdfDownload("report", "report-pdf");
  };

  return (
    <S.body>
      <Header />
      <S.container>
        <S.report id="report">
          <h1>BLACKLIST</h1>
          <p>
            일시 : {formattedDate}
            <br />
            {content}
          </p>
        </S.report>
        <S.download onClick={handleDownloadPdf}>Download PDF</S.download>
      </S.container>
    </S.body>
  );
};

export default Result;
