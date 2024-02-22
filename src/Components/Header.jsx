import React from "react";
import "./Header.css";
import logo from "./logo.jpeg";
import searchicon from "./searchicon.jpg";

const Header = () => {
  return (
    <div className="image">
      <img id="logo" src={logo} alt="logo" />
      <div class="searchicon">
        <img id="search" src={searchicon} alt="Search Icon" />
      </div>
    </div>
  );
};

export default Header;
