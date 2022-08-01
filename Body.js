import React from "react";
import "./Body.css";
import phone from "./img/phone.jpg";
import ps4 from "./img/ps5.jpg";
import ipouch from "./img/ipouch.jpg";
import vase from "./img/vase.jpg";
import speaker from "./img/speaker.jpg";
import mic from "./img/mic.jpg";
import sneakers from "./img/sneakers.jpg";
import necklace from "./img/necklace.jpg";
import flower from "./img/flower.jpg";
import search from "./img/search.svg";
import icon from "./img/shopping_cart_outline.svg";
import like from "./img/heart.svg";

function Body() {
  return (
    <div className="body">
      <div className="body__top-nav">
        <span className="body__top-nav-word">BROWSE CATEGORY</span>
        <div className="body__top-nav-search">
          <span className="body__top-nav-search-word">
            {" "}
            searching for anything{" "}
          </span>
          <img
            src={search}
            alt="search icon"
            className="body__top-nav-search__img"
          />
        </div>
        <div className="body__top-nav-filter">
          filter Products By
          <img
            src={search}
            alt="search icon"
            className="body__top-nav-search__filter_img"
          />
        </div>
      </div>
      <div className="main__body">
        <div className="body__nav-bar">
          <div className="body__nav-bar-item">item</div>
          <div className="body__nav-bar-item">item</div>
          <div className="body__nav-bar-item">item</div>
          <div className="body__nav-bar-item">item</div>
          <div className="body__nav-bar-item">item</div>
          <div className="body__nav-bar-item">item</div>
          <div className="body__nav-bar-item">item</div>
          <div className="body__nav-bar-item">item</div>
          <div className="body__nav-bar-item">item</div>
          <div className="body__nav-bar-item">item</div>
        </div>
        <div className="main__body-item">
          <div className="main__body-item__object">
            <div>
              <img
                src={phone}
                alt="woman in cart"
                className="main__body-item__object__img"
              />
            </div>
            <div className="main__body-item__object__price">
              <span className="name-of-item">name of item</span>
              <span className="price">0.00</span>
            </div>
            <div className="main__body-item__object__cart">
              <div className="add-to-cart">
                <span className="add-to-cart__word">Add to cart</span>
                <img src={icon} alt="cart" className="add-to-cart__icon" />
              </div>
              <img src={like} alt="cart" className="like" />
            </div>
          </div>
          <div className="main__body-item__object">
            <div>
              <img
                src={ps4}
                alt="woman in cart"
                className="main__body-item__object__img"
              />
            </div>
            <div className="main__body-item__object__price">
              <span className="name-of-item">name of item</span>
              <span className="price">0.00</span>
            </div>
            <div className="main__body-item__object__cart">
              <div className="add-to-cart">
                <span className="add-to-cart__word">Add to cart</span>
                <img src={icon} alt="cart" className="add-to-cart__icon" />
              </div>
              <img src={like} alt="cart" className="like" />
            </div>
          </div>
          <div className="main__body-item__object">
            <div>
              <img
                src={ipouch}
                alt="woman in cart"
                className="main__body-item__object__img"
              />
            </div>
            <div className="main__body-item__object__price">
              <span className="name-of-item">name of item</span>
              <span className="price">0.00</span>
            </div>
            <div className="main__body-item__object__cart">
              <div className="add-to-cart">
                <span className="add-to-cart__word">Add to cart</span>
                <img src={icon} alt="cart" className="add-to-cart__icon" />
              </div>
              <img src={like} alt="cart" className="like" />
            </div>
          </div>
          <div className="main__body-item__object">
            <div>
              <img
                src={vase}
                alt="woman in cart"
                className="main__body-item__object__img"
              />
            </div>
            <div className="main__body-item__object__price">
              <span className="name-of-item">name of item</span>
              <span className="price">0.00</span>
            </div>
            <div className="main__body-item__object__cart">
              <div className="add-to-cart">
                <span className="add-to-cart__word">Add to cart</span>
                <img src={icon} alt="cart" className="add-to-cart__icon" />
              </div>
              <img src={like} alt="cart" className="like" />
            </div>
          </div>
          <div className="main__body-item__object">
            <div>
              <img
                src={speaker}
                alt="woman in cart"
                className="main__body-item__object__img"
              />
            </div>
            <div className="main__body-item__object__price">
              <span className="name-of-item">name of item</span>
              <span className="price">0.00</span>
            </div>
            <div className="main__body-item__object__cart">
              <div className="add-to-cart">
                <span className="add-to-cart__word">Add to cart</span>
                <img src={icon} alt="cart" className="add-to-cart__icon" />
              </div>
              <img src={like} alt="cart" className="like" />
            </div>
          </div>
          <div className="main__body-item__object">
            <div>
              <img
                src={mic}
                alt="woman in cart"
                className="main__body-item__object__img"
              />
            </div>
            <div className="main__body-item__object__price">
              <span className="name-of-item">name of item</span>
              <span className="price">0.00</span>
            </div>
            <div className="main__body-item__object__cart">
              <div className="add-to-cart">
                <span className="add-to-cart__word">Add to cart</span>
                <img src={icon} alt="cart" className="add-to-cart__icon" />
              </div>
              <img src={like} alt="cart" className="like" />
            </div>
          </div>
          <div className="main__body-item__object">
            <div>
              <img
                src={sneakers}
                alt="woman in cart"
                className="main__body-item__object__img"
              />
            </div>
            <div className="main__body-item__object__price">
              <span className="name-of-item">name of item</span>
              <span className="price">0.00</span>
            </div>
            <div className="main__body-item__object__cart">
              <div className="add-to-cart">
                <span className="add-to-cart__word">Add to cart</span>
                <img src={icon} alt="cart" className="add-to-cart__icon" />
              </div>
              <img src={like} alt="cart" className="like" />
            </div>
          </div>
          <div className="main__body-item__object">
            <div>
              <img
                src={necklace}
                alt="woman in cart"
                className="main__body-item__object__img"
              />
            </div>
            <div className="main__body-item__object__price">
              <span className="name-of-item">name of item</span>
              <span className="price">0.00</span>
            </div>
            <div className="main__body-item__object__cart">
              <div className="add-to-cart">
                <span className="add-to-cart__word">Add to cart</span>
                <img src={icon} alt="cart" className="add-to-cart__icon" />
              </div>
              <img src={like} alt="cart" className="like" />
            </div>
          </div>
          <div className="main__body-item__object">
            <div>
              <img
                src={flower}
                alt="woman in cart"
                className="main__body-item__object__img"
              />
            </div>
            <div className="main__body-item__object__price">
              <span className="name-of-item">name of item</span>
              <span className="price">0.00</span>
            </div>
            <div className="main__body-item__object__cart">
              <div className="add-to-cart">
                <span className="add-to-cart__word">Add to cart</span>
                <img src={icon} alt="cart" className="add-to-cart__icon" />
              </div>
              <img src={like} alt="cart" className="like" />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll">
        <div className="scroll__page scroll__back">back</div>
        <div className="scroll__page">1</div>
        <div className="scroll__page">2</div>
        <div className="scroll__page">3</div>
        <div className="scroll__page">4</div>
        <div className="scroll__page">5</div>
        <div className="scroll__page">15</div>
        <div className="scroll__page scroll__forward">front</div>
      </div>
    </div>
  );
}

export default Body;
