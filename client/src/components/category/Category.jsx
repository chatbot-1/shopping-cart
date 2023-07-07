import React from "react";
import "./category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-container">
          <div className="cat-col">
            <div className="cat-row">
              <img
                src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="row-link">
                  Sale
                </Link>
              </button>
            </div>
            <div className="cat-row">
              <img
                src="https://img.freepik.com/free-photo/high-fashion-portrait-young-beautiful-brunette-woman-wearing-nice-trendy-blue-suit-sexy-fashion-model-posing-studio-fashionable-female-isolated_158538-22188.jpg?w=2000"
                alt=""
              />
              <button>
                <Link to="/products/1" className="row-link">
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className="cat-col">
            <div className="cat-row">
              <img
                src="https://images.unsplash.com/photo-1662070028002-113b980e263a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
                alt=""
              />
              <Link to="/products/1" className="row-link">
                <button>Sale</button>
              </Link>
            </div>
          </div>
          <div className="cat-col col-l">
            <div className="cat-row">
              <div className="cat-col">
                <div className="cat-row">
                  <img
                    src="https://c0.wallpaperflare.com/preview/917/572/1008/bodycare-skincare-beauty-dark.jpg"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="row-link">
                      Sale
                    </Link>
                  </button>
                </div>
              </div>
              <div className="cat-col">
                <div className="cat-row">
                  <img
                    src="https://img.freepik.com/free-photo/composition-fathers-day-with-accessories_23-2147790930.jpg"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="row-link">
                      Sale
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="cat-row">
              <img
                src="https://c0.wallpaperflare.com/preview/822/951/691/pair-of-white-red-and-black-nike-air-jordan-1-shoes-on-floor.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="row-link">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
