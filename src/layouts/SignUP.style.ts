import styled from "styled-components";
export const body = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  text-align: center;
  align-items: center;
`;
export const SignUp = styled.div`
  width: 40%;
  height: 80%;
  margin: auto;
  align-items: center;
`;

export const inputEmail = styled.input`
  height: 90%;
  border-radius: 10px;
  width: 32%;
  background-color: #646363;
  border: none;
  margin-right: 1%;
  color: #b1b1b1;
  padding-left: 2%;
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
export const selectEmail = styled.select`
  height: 90%;
  border-radius: 10px;
  width: 32%;
  padding-left: 2%;
  background-color: #646363;
  border: none;
  margin-left: 1%;
  color: #b1b1b1;
  padding-right: 1%;
`;

export const Email = styled.div`
  color: white;
  height: 10%;
  width: 100%;
`;
