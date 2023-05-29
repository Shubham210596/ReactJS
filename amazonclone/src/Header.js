import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header__search">
        <input className="header_searchInput" type="text" />
      </div>

      <div className="header__nav">
        <div className="header__option"></div>
      </div>
    </div>
  );
};

export default Header;
