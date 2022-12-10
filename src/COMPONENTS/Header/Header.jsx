import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";
import logo from "../../ASSETS/SITE_IDENTITY/logo.png";
import { BsBasket2Fill } from "react-icons/bs";
import { BiSearch, BiMenu, BiMap } from "react-icons/bi";

import "./Header.css";
const Header = () => {
  return (
    <div className="headerSection container-fluid ">
      <div className="left col-xl-1 col-lg-2 col-md-2 ">
        <Link to="/">
          <img width={90} src={logo} alt="" />
        </Link>
      </div>

      <div className="col-xl-8 col-lg-6 col-md-5 ">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Find products "
            aria-label="Search"
          />
          <Button className="searchBtn">
            <BiSearch></BiSearch>
          </Button>
        </Form>
      </div>

      <div className="right col-xl-3 col-lg-4 col-sm-4 col-md-5  d-md-block d-none">
        <Nav className="justify-content-end ">
          <Link to="/signin">
            <small className="">Deliver to</small>
            <br />
            <p>
              <BiMap></BiMap> Bangladesh
            </p>
          </Link>
          <Link to="/signin">
            <small className="">Hello, sign in</small>
            <br />
            <p>Account $ Lists</p>
          </Link>
          <Link to="/signin">
            <small>Returns</small>
            <br />
            <p>& Orders</p>
          </Link>
          <Link className="nav-link" to="/signin">
            <BsBasket2Fill></BsBasket2Fill>
          </Link>
        </Nav>
      </div>
      <div className="mobileMenu d-md-none text-light ms-5">
        <button className="mobileMenu">
          <BiMenu className="mobileMenu"></BiMenu>
        </button>
      </div>
    </div>
  );
};

export default Header;
