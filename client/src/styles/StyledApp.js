import styled from "styled-components";
import storeBG from "../../src/img/store-background.jpg";

export const StyledApp = styled.div`
  background: url(${storeBG});
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .main-container {
    background: white;
    display: flex;
    flex-direction: column;
    padding: 20px 50px;
    margin: 20px;
    font-family: "Trebuchet MS", sans-serif;
    text-align: center;

    h1 {
      font-size: 2rem;
      font-weight: bold;
    }

    h4 {
      font-size: 1rem;
      margin-bottom: 20px;
    }
  }
`;
