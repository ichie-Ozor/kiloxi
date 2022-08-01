import React from "react";
import "./Footer.css";
import logo from "./img/logo.png";

function Footer() {
  return (
    <div className="footer__info">
      <div className="footer__note-logo">
        <img src={logo} alt="logo" className="footer__logo__image" />
      </div>
      <div className="footer__note">You can contact us here</div>
      <div className="footer__search">
        <div className="footer__search__note">who are you looking for?</div>
        <div className="footer__search__section">
          <div className="footer__search__bar">search here</div>
          <div className="footer__search__button"></div>
        </div>
      </div>
      <div className="footer__address">this is where we are located</div>
    </div>
  );
}

export default Footer;
