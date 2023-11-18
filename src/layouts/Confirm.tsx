import * as S from "./Confrim.style";
import * as C from "../components/components.style";
import Header from "../components/header/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { parse } from "path";

const Confirm = () => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const navigate = useNavigate();
  const data = localStorage.getItem("myData");
  const parsedData = data
    ? JSON.parse(data)
    : console.log("Data not found in localStorage");

  interface Data {
    data: string;
    isCorrect: string;
  }

  const [nameArray, setNameArray] = useState<Data[]>([]);
  const [personalArray, setPersonalArray] = useState<Data[]>([]);

  useEffect(() => {
    if (
      parsedData &&
      parsedData.nameData &&
      typeof parsedData.nameData === "string"
    ) {
      const nameData = parsedData.nameData.split(",");
      console.log(nameData);
      const names = nameData[3]
        .split(" ")
        .filter((name: string) => name.trim() !== "");
      console.log(names);
      const initializedNameArray = names.map((name: string) => ({
        data: name,
        isCorrect: "Correct",
      }));
      console.log(initializedNameArray);
      setNameArray(initializedNameArray);
    }
    if (
      parsedData &&
      parsedData.personalData &&
      typeof parsedData.nameData === "string"
    ) {
      const personalData = parsedData.personalData
        .split(",")
        .filter((name: string) => name.trim() !== "");
      console.log(personalData);
      const initializedPersonalArray = personalData.map(
        (personalData: string) => ({
          data: personalData,
          isCorrect: "Correct",
        }),
      );
      console.log(initializedPersonalArray);
      setPersonalArray(initializedPersonalArray);
    }
  }, []); // 두 번째 매개변수로 빈 배열을 전달

  useEffect(() => {
    console.log("Rendered nameArray:", nameArray);
  }, [nameArray]);

  const handleCheckBtnClick = (index: number, type: string) => {
    if (type == "name") {
      setNameArray((prevNameArray) => {
        const updatedNameArray = [...prevNameArray];
        console.log("Before update:", updatedNameArray[index].isCorrect);
        if (updatedNameArray[index].isCorrect === "Correct") {
          return prevNameArray.map((x, i) =>
            i === index ? { ...x, isCorrect: "Incorrect" } : x,
          );
        } else if (updatedNameArray[index].isCorrect === "Incorrect") {
          return prevNameArray.map((x, i) =>
            i === index ? { ...x, isCorrect: "Correct" } : x,
          );
        }
        console.log("After update:", updatedNameArray[index].isCorrect);
        return updatedNameArray;
      });
    } else if (type == "personal") {
      setPersonalArray((prevPersonalArray) => {
        const updatedPersonalArray = [...prevPersonalArray];
        console.log("Before update:", updatedPersonalArray[index].isCorrect);
        if (updatedPersonalArray[index].isCorrect === "Correct") {
          return prevPersonalArray.map((x, i) =>
            i === index ? { ...x, isCorrect: "Incorrect" } : x,
          );
        } else if (updatedPersonalArray[index].isCorrect === "Incorrect") {
          return prevPersonalArray.map((x, i) =>
            i === index ? { ...x, isCorrect: "Correct" } : x,
          );
        }
        console.log("After update:", updatedPersonalArray[index].isCorrect);
        return updatedPersonalArray;
      });
    }
  };

  function sendData() {
    // 카운트 배열 초기화
    const countArray = Array(personalArray.length).fill(0);

    // personalArray를 순회하면서 countArray 갱신
    personalArray.forEach((personalData, index) => {
      const match = personalData.data.match(/갯수는 : (\d+)/);
      countArray[index] = match ? parseInt(match[1], 10) : 0;
    });
    console.log(countArray);

    // Incorrect 항목은 countArray의 값을 0으로 설정
    personalArray.forEach((personalData, index) => {
      if (personalData.isCorrect === "Incorrect") {
        countArray[index + countArray.length / 2] -= 1;
      }
    });

    // personalData 갱신
    const updatedPersonalData = personalArray
      .map((personalData, index) => {
        return (
          countArray[index] != 0 &&
          personalData.data.replace(
            /갯수는 : (\d+)/,
            `갯수는 : ${countArray[index]}`,
          )
        );
      })
      .filter(Boolean);

    const updatedData = {
      nameData: nameArray
        .filter((nameData) => nameData.isCorrect === "Correct")
        .map((nameData) => nameData.data),
      personalData: updatedPersonalData,
      url: parsedData.url,
      option: parsedData.option,
      content: parsedData.content,
    };

    console.log(parsedData);
    console.log(updatedData);
    localStorage.setItem("myData", JSON.stringify(updatedData));
    navigate("/result");
  }

  const result = (
    <>
      {nameArray.length > 0 && (
        <>
          <S.subTitle>Name</S.subTitle>
          <S.name>
            <ul>
              {nameArray.map((nameData, index) => (
                <li key={index}>
                  {nameData.data}
                  <S.checkBtn
                    onClick={() => handleCheckBtnClick(index, "name")}
                    color={nameArray[index].isCorrect}
                  >
                    {nameArray[index].isCorrect}
                  </S.checkBtn>
                </li>
              ))}
            </ul>
          </S.name>
        </>
      )}

      {personalArray.length > 0 && (
        <>
          <S.subTitle>Personal Data</S.subTitle>
          <S.personal>
            <ul>
              {personalArray
                .filter((personalData) => !personalData.data.includes("갯수는"))
                .map((personalData, index) => (
                  <li key={index}>
                    <p>{personalData.data}</p>
                    <S.checkBtn
                      onClick={() => handleCheckBtnClick(index, "personal")}
                      color={personalArray[index].isCorrect}
                    >
                      {personalArray[index].isCorrect}
                    </S.checkBtn>
                  </li>
                ))}
            </ul>
          </S.personal>
        </>
      )}
      <>
        <C.ResultBtn onClick={() => sendData()}>제출</C.ResultBtn>
      </>
    </>
  );

  console.log("Rendered nameArray:", nameArray);

  return (
    <S.body>
      <Header />
      <S.Title>Verify Personal Information</S.Title>
      <S.container>{result}</S.container>
    </S.body>
  );
};

export default Confirm;
