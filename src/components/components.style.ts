import styled from "styled-components";

export const ResultBtn = styled.button`
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
  &:hover {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const LoginBtn = styled.button`
  width: 72%;
  height: 10%;
  background-color: #b80103;
  border-radius: 10px;
  border: none;
  color: white;
  margin-top: 5%;
  font-size: 1.4rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  a {
    text-decoration: none;
    color: white;
  }
  margin-bottom: 5%;
`;

export const inputName = styled.div`
  margin-top: 5%;
  color: white;
  display: flex;
  margin-left: 15%;
`;

export const input = styled.input`
  width: 70%;
  height: 10%;
  background-color: #646363;
  border-radius: 10px;
  border: none;
  padding-left: 2%;
  color: #b1b1b1;

  &::placeholder {
    color: #ccc;
  }
  &::-webkit-input-placeholder {
    color: #ccc;
  }
  &:-ms-input-placeholder {
    color: #ccc;
  }
`;
