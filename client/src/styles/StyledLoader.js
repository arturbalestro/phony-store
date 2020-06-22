import styled from "styled-components";

export const StyledLoader = styled.div`
  background: white;
  opacity: 0.7;
  position: fixed;
  width: 100%;
  height: 100%;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    max-width: 30%;
  }
`;
