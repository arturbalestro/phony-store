import React from "react";

import { StyledHeader } from "../../../styles/StyledHeader";
import logo from "../../../img/product-logo.png";

const Header = () => (
  <StyledHeader>
    <img className="logo" src={logo} alt="Phony Store Logo" />
    <h1>Welcome to Phony Store!</h1>
    <h3>Find the best phone here</h3>
  </StyledHeader>
);

export default Header;
