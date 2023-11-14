import styled from "styled-components";

export const body = styled.body`
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
`;

export const container = styled.div`
  top: 8%;
  width: 80%;
  height: 100%;
  padding-left: 10%;
  padding-right: 10%;
  position: fixed;
`;

export const Light = styled.div<{
  lighted: boolean;
  lightPosition: { x: number; y: number };
}>`
  position: absolute;
  opacity: 50%;
  width: 10%;
  height: 5%;
  padding-top: 10%;
  background: radial-gradient(
    ellipse at center,
    ${({ lighted }) =>
        lighted ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 0, 0, 0.5)"}
      10%,
    transparent 80%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.2s, left 0.2s;
  top: ${(props) => props.lightPosition.y}px;
  left: ${(props) => props.lightPosition.x}px;
  /* z-index: 1; */
`;
