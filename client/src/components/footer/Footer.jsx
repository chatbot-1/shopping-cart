import React from "react";
import "./footer.css";
import payment from "../../assets/payment.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-item">
              <h1>Categories</h1>
              <span>Women</span>
              <span>Men</span>
              <span>Shoes</span>
              <span>Accessories</span>
              <span>New Arrivals</span>
            </div>
            <div className="footer-item">
              <h1>Links</h1>
              <span>FAQ</span>
              <span>Pages</span>
              <span>Stores</span>
              <span>Compare</span>
              <span>Cookies</span>
            </div>
            <div className="footer-item">
              <h1>About</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus sint, aperiam maxime, nulla cupiditate laboriosam ab
                voluptate voluptates saepe esse commodi quae dolores aliquam in.
              </p>
            </div>
            <div className="footer-item">
              <h1>Contact</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus sint, aperiam maxime, nulla cupiditate laboriosam ab
                voluptate voluptates saepe esse commodi quae dolores aliquam in.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="bottom-left">
                <span className="footer-logo">Logo</span>
                <span className="copyright">Ⓒ Copyright 2023. All Rigts Reserved.</span>
            </div>
            <div className="bottom-right">
                <img src={payment} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
