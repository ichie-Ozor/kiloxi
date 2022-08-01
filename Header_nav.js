import React from "react";
import logo from "./img/logo.png";
import cart from "./img/shopping_cart.svg";
import search from "./img/search.svg";

function HeaderNav() {
  return (
    <div className="header__nav">
      <div className="header__nav-icon">
        <img src={logo} alt="logo" className="logo__image" />
      </div>
      <div className="header__nav-content">
        <div className="header__nav-home">Home</div>
        <div className="header__nav-contact">Contact</div>
        <img src={cart} alt="logo" className="header__nav-content__image" />
        <img src={search} alt="logo" className="header__nav-content__image" />
      </div>
    </div>
  );
}

export default HeaderNav;
