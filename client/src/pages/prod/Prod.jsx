import React, { useState } from "react";
import "./prod.css";

const Prod = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0055_aacdad05-1d72-4a19-9874-84caad561d72.jpg?v=1655888040",
    "https://static.cilory.com/480480-thickbox_default/indigo-wash-rugged-round-neck-full-sleeve-t-shirt.jpg",
  ];

  const [selected, setSelected] = useState(0);

  const [quant, setQuant] = useState(1);

  return (
    <div className="prod">
      <div className="container">
        <div className="prod-container">
          <div className="prod-left">
            <div className="prod-images">
              <img src={images[0]} alt="" onClick={(e) => setSelected(0)} />
              <img src={images[1]} alt="" onClick={(e) => setSelected(1)} />
            </div>
            <div className="main-image">
              <img src={images[selected]} alt="" />
            </div>
          </div>
          <div className="prod-right">
            <h1>Title</h1>
            <span className="prod-price">$19</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              voluptates quidem accusantium eligendi, inventore in, placeat
              laborum reprehenderit vel fuga repellat voluptas nisi quae quos?
            </p>
            <div className="quantity">
              <button onClick={() => setQuant((prev) => prev === 1 ? 1 : prev-1)}>-</button>
              {quant}
              <button onClick={() => setQuant(prev => prev+1)}>+</button>
            </div>
            <button className="add-cart">Add to cart</button>
            <div className="prod-links">
              <div className="prod-items">Add to Wishlist</div>
              <div className="prod-items">Compare Product</div>
            </div>
            <div className="prod-info">
              <span>Vendor: Polo</span>
              <span>Products Type: T-shirt</span>
              <span>Tags: T-shirt, Man, Top</span>
            </div>
            <hr />
            <div className="prod-details">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prod;
