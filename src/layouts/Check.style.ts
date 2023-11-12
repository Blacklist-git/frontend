import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const Container = styled.div`
  margin-top: 5%;
  width: 100%;
  height: 60%;
  background-color: none;
  border: 0.5px solid #ff0909;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

// export const Light = styled.div<{
//   lighted: boolean;
//   lightPosition: { x: number; y: number };
// }>`
//   position: absolute;
//   opacity: 50%;
//   width: 30%;
//   height: 30%;
//   padding-top: 20%;
//   background: radial-gradient(
//     ellipse at center,
//     ${({ lighted }) =>
//         lighted ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 0, 0, 0.6)"}
//       10%,
//     transparent 80%
//   );
//   border-radius: 50%;
//   transform: translate(-50%, -50%);
//   transition: top 0.3s, left 0.3s;
//   top: ${(props) => props.lightPosition.y}px;
//   left: ${(props) => props.lightPosition.x}px;
//   z-index: 2;
// `;

export const Title = styled.h1`
  text-align: center;
  color: white;
  font-weight: 500;
  margin: 5% auto;
  z-index: 3;
`;

export const InputUrl = styled.div`
  display: flex;
  height: 15%;
  width: 80%;
  margin: 5% auto;
  align-items: center;
  text-align: center;
`;

export const Input = styled.input`
  width: 83%;
  height: 92%;
  background-color: white;
  border-radius: 15px 0px 0px 15px;
  padding-left: 2%;
  border: none;
  font-size: 1rem;
  z-index: 3;
`;

export const InputBtn = styled.div`
  color: white;
  border: none;
  width: 15%;
  height: 100%;
  background-color: #b80103;
  border-radius: 0px 15px 15px 0px;
  font-weight: 700;
`;

export const Select = styled.select`
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
  a {
    text-decoration: none;
    color: white;
  }
`;

export const FileUpload = styled.input.attrs({
  type: "file",
})`
  display: none;
`;

export const File = styled.label`
  display: flex;
  width: 83%;
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
  align-items: center;
`;
