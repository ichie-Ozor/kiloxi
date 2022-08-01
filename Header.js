import React from "react";
import "./Header.css";
import HeaderNav from "./Header_nav";
import womanincart from "./img/cart.svg";
import pattern from "./img/pattern.svg";

function Header() {
  return (
    <div className="header">
      <div className="main__header">
        <HeaderNav />
        <div className="header__word">
          <h1>Welcome to Kiloxi!</h1>
          <span className="header__word__2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora
            aspernatur temporibus corporis deserunt odio atque officia totam
            consequuntur cupiditate debitis recusandae ea aliquam nemo,
            distinctio voluptas! Nobis, minima temporibus?
          </span>
        </div>
      </div>
      <div className="header__image">
        <img src={pattern} alt="woman in cart" className="header__image" />
        <img
          src={womanincart}
          alt="woman in cart"
          className="header__image_img"
        />
      </div>
    </div>
  );
}

export default Header;
