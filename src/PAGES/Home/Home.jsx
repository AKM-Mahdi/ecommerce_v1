import React from "react";
import Product from "../../COMPONENTS/Product/Product";
import "./Home.css";
const Home = () => {
  return (
    <div className="homeSection">
      <div className="homeContainer">
        <img
          className="bannerImg"
          src="https://m.media-amazon.com/images/I/71YIDh9SEtL._SX3000_.jpg"
          alt=""
        />

        <div className="productsLayout container">
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
    </div>
  );
};

export default Home;
