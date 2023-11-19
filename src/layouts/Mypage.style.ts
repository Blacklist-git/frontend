import styled from "styled-components";

export const body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const container = styled.div`
  margin-top: 5%;
  width: 100%;
  height: 80%;
  display: flex;
`;

export const profileInfo = styled.div`
  width: 10%;
  display: block;
  text-align: center;
`;

export const profile = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;

export const profileImg = styled.img`
  border-radius: 100%;
  width: 100%;
  height: auto;
`;

export const edit = styled.img`
  width: 30%;
  height: fit-content;
  margin-left: -20%;
  margin-top: 80%;
`;
export const name = styled.p`
  font-size: 1rem;
  color: white;
  margin: auto;
`;

export const analContainer = styled.div`
  P {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
  display: block;
  width: 100%;
  height: 80%;
  overflow-y: auto; /* 스크롤바를 필요에 따라 표시 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨김 */
  -ms-overflow-style: none; /* Internet Explorer에서 스크롤바 숨김 */
  &::-webkit-scrollbar {
    width: 0;
    background: transparent; /* Chrome, Safari, Edge에서 스크롤바 숨김 */
  }
`;

export const analBox = styled.div`
  margin-top: 2%;
  width: 100%;
  height: 60px;
  background-color: #d9d9d9;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const analInfo = styled.ul`
  width: 100%;
  list-style: none;
  color: black;
  display: flex;
  /* text-align: center; */
  li {
    font-size: 1.2rem;
    text-align: center;
    padding: 0 5%;
    width: 20%;
    overflow: hidden;
    display: flex;
    align-items: center;
    img {
      width: 12%;
      height: auto;
      padding-left: 5%;
    }
  }
`;
