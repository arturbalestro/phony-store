import styled from "styled-components";

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  border-bottom: 3px solid olive;
  margin-bottom: 20px;

  &:last-child {
    border-bottom: none;
  }

  .product-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    min-width: 50%;

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 0 5px 0;
    }
    p {
      margin: 5px 0;

      b {
        color: olive;
      }
    }
  }
`;
