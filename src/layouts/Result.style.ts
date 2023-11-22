import styled from "styled-components";
import reportImage from "public/images/reportImage.svg";

export const body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;
export const container = styled.div`
  width: 100%;
  height: 100%;
  background-color: none;
  display: flex;
`;

export const download = styled.button`
  display: flex;
  width: ${(props) => (props.color ? props.color : "15%")};
  height: 10%;
  background-color: #b80103;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  align-items: center;
  margin: auto;
  justify-content: center;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const csv = styled.div`
  display: block;
  margin: auto;
  width: 70%;
  height: 100%;
  margin-top: 10%;
`;

export const exampleBox = styled.div`
  margin: auto;
  width: 100%;
  height: 20%;
  background-color: none;
  margin-bottom: 3%;
  border: 2px solid #b80103;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  p {
    font-size: 1.1rem;
    padding: 0;
    margin: 0;
    align-items: center;
    font-weight: bold;
  }
  &:hover {
    border: 2px solid white;
  }
`;

export const title = styled.div`
  color: white;
  text-align: left;
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 2%;
`;
