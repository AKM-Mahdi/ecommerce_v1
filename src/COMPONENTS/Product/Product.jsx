import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <div className="product">
      <div className="productInfo">
        <p>
          SOLE Fitness E55 (2017 Model Blowout Sale) Indoor Elliptical, Home and
          Gym Exercise Equipment, Smooth and Quiet, Versatile for Any Workout
        </p>
        <p className="productPrice">
          <small>$</small>
          <strong>11.96</strong>
        </p>
        <p className="productRating">⭐⭐⭐⭐</p>
      </div>

      <div className="productImg">
        <img
          src="https://m.media-amazon.com/images/I/41Qpad+GEVL._AC_.jpg"
          alt=""
        />
      </div>
      <div className="productBtn">
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
