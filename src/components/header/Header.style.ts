import styled from "styled-components";

export const header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0;
`;

export const nav = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: fit-content;
`;

export const home = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const category = styled.div`
  font-size: 1em;
  ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

interface ButtonProps {
  backgroundColor: string;
}

export const button = styled.button<ButtonProps>`
  font-size: 1em;
  font-weight: 500;
  width: fit-content;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  color: ${(props) => props.color};
  border: none;
  cursor: pointer;
`;

export const btns = styled.div`
  display: flex;
  gap: 30px;
  margin-left: auto;
`;
