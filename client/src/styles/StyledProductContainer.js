import styled from "styled-components";

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  &:last-child {
    border-bottom: none;
  }

  .product-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    min-width: 50%;

    .card {
      align-items: center;

      img {
        max-width: 50%;
      }
    }

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 0 5px 0;
    }
    p {
      margin: 5px 0;

      b {
        color: #ea464d;
      }
    }
  }
`;
