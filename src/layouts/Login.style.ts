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
export const Login = styled.div`
  width: 40%;
  height: 80%;
  margin: auto;
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

export const SignUp = styled.div`
  color: white;
  font-size: 0.9rem;
  margin-right: 0%;
  width: fit-content;
  margin-left: 74%;
  margin-top: 1%;
  a {
    color: white;
    text-decoration: none;
  }
`;
