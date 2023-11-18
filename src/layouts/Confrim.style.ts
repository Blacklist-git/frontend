import styled from "styled-components";

export const body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const container = styled.div`
  /* margin-top: 5%; */
  position: relative;
  width: 100%;
  height: 55%;
  background-color: black;
  border: 1px solid #ff0909;
  border-radius: 40px;
  padding-top: 3%;
  overflow: scroll;
  padding-left: 3%;
  padding-right: 6%;
  padding-bottom: 2%;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  margin-top: 2%;
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
  width: 100%;
`;

export const checkBtn = styled.div`
  display: flex;
  margin-left: 9%;
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

export const name = styled.div`
  margin-top: 2%;
  width: 100%;
  height: fit-content;
  padding-left: 2%;
  display: flex;
  overflow-y: scroll;
  ul {
    margin: 0;
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
    line-height: 165%;
    height: 100%;
    color: white;
    align-items: center;
    padding-bottom: 3%;
  }
  ${checkBtn} {
    font-size: 0.8rem;
    width: 29%;
  }
`;

export const personal = styled.div`
  width: 100%;
  overflow-y: scroll;
  color: white;
  padding-left: 2%;
  padding-bottom: 2%;
  ul {
    margin: 0;
    padding: 0;
    height: fit-content;
  }
  li {
    margin-top: 2%;
    display: flex;
    line-height: 200%;
    padding-bottom: 2%;
    align-items: center;
    border-bottom: 1px solid white;
  }
  p {
    margin: 0;
    height: fit-content;
    width: 87%;
  }
  ${checkBtn} {
    position: absolute;
    right: 5%;
    height: 6%;
    width: 5%;
    justify-content: center;
    font-size: 0.8rem;
  }
`;
