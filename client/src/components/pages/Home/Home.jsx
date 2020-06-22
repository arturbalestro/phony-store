import React from "react";
import { locales } from "../../../utils/locales";

import { StyledButton } from "../../../styles/StyledButton";

const Home = ({ history }) => {
  const navigateToProducts = () => {
    history.push("/products");
  };

  return (
    <div>
      <StyledButton onClick={navigateToProducts}>
        {locales.checkProductsButtonText}
      </StyledButton>
    </div>
  );
};

export default Home;
