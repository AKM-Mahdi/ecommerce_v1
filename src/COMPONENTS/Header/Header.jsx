import React from "react";

import { Link } from "react-router-dom";
import logo from "../../ASSETS/SITE_IDENTITY/logo.png";
import { BsBasket2Fill } from "react-icons/bs";
import { BiSearch, BiMenu, BiMap } from "react-icons/bi";

import "./Header.css";
const Header = () => {
  return (
    <div className="headerSection container-fluid">
      <img className="logo" src={logo} alt="" />
      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        <BiSearch className="headerSearchBtn" />
      </div>
      <div className="navMenu">
        <Link className="nav-link" to="/signin">
          <span className="">Deliver to</span>
          <br />
          <p>
            <BiMap></BiMap> Bangladesh
          </p>
        </Link>
        <Link to="/signin">
          <span className="">Hello, sign in</span>
          <br />
          <p>Account $ Lists</p>
        </Link>
        <Link to="/signin">
          <span>Returns</span>
          <br />
          <p>& Orders</p>
        </Link>
        <Link className="nav-link" to="/signin">
          <BsBasket2Fill></BsBasket2Fill>
          <span className="cartCount">0</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
