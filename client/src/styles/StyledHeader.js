import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  text-align: center;
  width: 100%;

  .top-container {
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 4px solid #EA464D;
    padding: 20px;
    width: 100%;
  }

  .logo {
    border-radius: 220px;
    max-width: 130px;
    text-align: center;
  }

  h1 {
    font-weight: bold;
    margin-bottom: 0;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 5px;
  }
`;
