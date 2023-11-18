import styled from "styled-components";

export const body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const container = styled.div`
  /* margin-top: 5%; */
  width: 100%;
  height: 60%;
  background-color: black;
  border: 0.5px solid #ff0909;
  border-radius: 40px;
  padding-top: 4%;
  overflow: scroll;
  padding-left: 4%;
`;

export const text = styled.div`
  color: white;
  width: 100%;
`;

export const Title = styled.h1`
  /* text-align: center; */
  color: white;
  font-weight: 500;
  /* margin-left: 3%; */
  /* margin-top: 5%; */
  z-index: 3;
`;

export const subTitle = styled.div`
  /* text-align: center; */
  color: white;
  font-weight: normal;
  font-size: 1.6rem;
  margin-bottom: 2%;
  width: 100%;
`;
export const content = styled.div`
  width: 100%;
  height: 100%;
`;

export const name = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 0; */
  display: flex;
  overflow-y: scroll;
  ul {
    padding: 0;
    flex-flow: wrap;
    gap: 1%;
    display: flex;
    width: 100%;
    height: 100%;
  }
  li {
    display: flex;
    list-style: none;
    width: 18%;
    height: 10%;
    color: white;
    align-items: center;
    padding-bottom: 3%;
  }
`;

export const checkBtn = styled.div`
  display: flex;
  width: 40%;
  margin-left: 9%;
  height: 100%;
  border-radius: 5px;
  background-color: ${(props) =>
    props.color == "Correct" ? "white" : "#b80103"};
  color: ${(props) => (props.color == "Correct" ? "black" : "white")};
  font-size: 0.9rem;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
