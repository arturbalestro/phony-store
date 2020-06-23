import styled from "styled-components";

export const StyledButton = styled.button`
  box-sizing: border-box;
  font-weight: bold;
  margin: 0;
  padding: 8px;
  border: none;
  color: white;
  background: #ea464d;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  text-align: center;
  min-width: 100px;
  text-transform: uppercase;

  &.options {
    margin: 0 10px;
    padding: 10px;
    font-size: 0.8rem;
    min-width: inherit;
  }
`;
