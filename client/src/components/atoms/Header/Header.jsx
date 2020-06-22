import React from "react";
import { StyledHeader } from "../../../styles/StyledHeader";
import logo from "../../../img/product-logo.png";
import { locales } from "../../../utils/locales";

const Header = () => (
  <StyledHeader>
    <div className="top-container">
      <a href="/">
        <img className="logo" src={logo} alt={locales.phonyStoreLogoText} />
      </a>
    </div>
  </StyledHeader>
);

export default Header;
