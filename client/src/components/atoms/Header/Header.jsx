import React from "react";

import { StyledHeader } from "../../../styles/StyledHeader";
import logo from "../../../img/product-logo.png";
import { locales } from "../../../utils/locales";

const Header = () => (
  <StyledHeader>
    <img className="logo" src={logo} alt="Phony Store Logo" />
    <h1>{locales.mainTitle}</h1>
    <h3>{locales.mainSubTitle}</h3>
  </StyledHeader>
);

export default Header;
