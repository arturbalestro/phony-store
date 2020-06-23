import styled from "styled-components";

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  .card {
    margin-bottom: 20px;
    align-items: center;

    img {
      max-width: 50%;
    }

    p {
      margin: 5px 0;

      strong {
        color: #ea464d;
      }
    }
  }
`;
