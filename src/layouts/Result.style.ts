import styled, { createGlobalStyle } from "styled-components";
import reportImage from "public/images/reportImage.svg";

export const body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;
export const container = styled.div`
  margin-top: 2%;
  width: 100%;
  height: 100%;
  background-color: none;
  display: flex;
`;

export const report = styled.div`
  background-image: url("/images/reportImage.svg");
  background-size: cover;
  width: 400px;
  height: 560px;
  margin: auto;
  margin-top: 0;
  overflow-y: scroll;
  h1 {
    text-align: center;
    font-weight: 220;
    font-size: 1.5rem;
  }
  p {
    font-size: 0.6rem;
    font-weight: 400;
    padding-left: 10%;
  }
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
  margin-left: 0;
  justify-content: center;
`;

