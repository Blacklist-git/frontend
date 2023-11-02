import styled from "styled-components";

export const body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const container = styled.div`
  margin-top: 5%;
  width: 100%;
  height: 60%;
  background-color: black;
  border: 0.5px solid #ff0909;
  border-radius: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-weight: 500;
  margin: 5% auto;
`;

export const inputUrl = styled.div`
  display: flex;
  height: 15%;
  width: 80%;
  margin: 5% auto;
  align-items: center;
  text-align: center;
`;

export const input = styled.input`
  width: 83%;
  height: 92%;
  background-color: white;
  border-radius: 15px 0px 0px 15px;
  padding-left: 2%;
  border: none;
  font-size: 1rem;
`;
export const inputBtn = styled.div`
  color: white;
  border: none;
  width: 15%;
  height: 100%;
  background-color: #b80103;
  border-radius: 0px 15px 15px 0px;
  font-weight: 700;
`;

export const select = styled.select`
  height: 100%;
  width: 90%;
  text-align: center;
  display: flex;
  font-size: 0.9rem;
  text-align: center;
  border: none;
  align-items: center;
  background-color: #b80103;
  color: white;
  font-weight: 700;
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const resultBtn = styled.button`
  display: flex;
  width: 17%;
  height: 15%;
  background-color: #b80103;
  margin: auto;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const file = styled.input.attrs({
  type: "file",
})`
  width: 83%;
  height: 92%;
  &::-webkit-file-upload-button {
    width: 100%;
    height: 100%;
    border-radius: 15px 0px 0px 15px;
    padding-left: 2%;
    border: none;
    font-size: 1rem;
    background-color: white;
    text-align: left;
    &:hover {
      background-color: grey;
      color: white;
    }
  }
`;
