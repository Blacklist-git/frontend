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
export const Title = styled.div`
  font-weight: bold;
  font-size: 2.8rem;
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

export const LoginBtn = styled.button`
  width: 72%;
  height: 10%;
  background-color: #b80103;
  border-radius: 10px;
  border: none;
  color: white;
  margin-top: 5%;
  font-size: 1.4rem;
`;
