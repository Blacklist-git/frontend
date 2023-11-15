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
  width: 15%;
  height: 10%;
  background-color: #b80103;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  align-items: center;
  margin: auto;
  margin-left: 30%;
  justify-content: center;
  a {
    text-decoration: none;
    color: white;
  }
`;
