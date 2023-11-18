import * as S from "./Confrim.style";
import Header from "../components/header/Header";
import { useState, useEffect } from "react";

const Confirm = () => {
  const data = localStorage.getItem("myData");
  const parsedData = data ? JSON.parse(data) : null;

  const date = new Date();
  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  interface NameData {
    name: string;
    isCorrect: string;
  }

  const [nameArray, setNameArray] = useState<NameData[]>([]);

  useEffect(() => {
    if (parsedData && parsedData.nameData) {
      const nameData = parsedData.nameData.split(",");
      console.log(nameData);
      const names = nameData[3]
        .split(" ")
        .filter((name: string) => name.trim() !== "");
      console.log(names);
      const initializedNameArray = names.map((name: string) => ({
        name: name,
        isCorrect: "Correct",
      }));
      console.log(initializedNameArray);
      setNameArray(initializedNameArray);
    }
  }, []); // 두 번째 매개변수로 빈 배열을 전달

  useEffect(() => {
    console.log("Rendered nameArray:", nameArray);
  }, [nameArray]);

  const handleCheckBtnClick = (index: number) => {
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
  };

  const result =
    nameArray.length > 0 ? (
      <>
        <S.subTitle>Name</S.subTitle>
        <S.name>
          <ul>
            {nameArray.map((nameData, index) => (
              <li key={index}>
                {nameData.name}
                <S.checkBtn
                  onClick={() => handleCheckBtnClick(index)}
                  color={nameArray[index].isCorrect}
                >
                  {nameArray[index].isCorrect}
                </S.checkBtn>
              </li>
            ))}
          </ul>
        </S.name>
      </>
    ) : null;

  console.log("Rendered nameArray:", nameArray);

  return (
    <S.body>
      <Header />
      <S.Title>Check for incorrect personal information</S.Title>
      <S.container>{result}</S.container>
    </S.body>
  );
};

export default Confirm;
