import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border: 3px solid #EA464D;
  text-align: left;

  .form-group {
    margin-bottom: 0;
    min-height: 100px;

    &:last-child {
      min-height: inherit;
    }
  }

  label {
    color: #666;
    font-weight: bold;
  }

  input {
    border-radius: 0;
    color: #666;
    font-size: 16px;

    + .error-feedback {
      margin-bottom: 10px;
    }
  }

  button[type="submit"] {
    margin-top: 10px;
  }
`;
