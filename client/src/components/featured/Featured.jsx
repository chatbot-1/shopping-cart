import React, { useEffect, useState } from "react";
import "./featured.css";
import Card from "../card/Card";
import axios from "axios"

const Featured = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0055_aacdad05-1d72-4a19-9874-84caad561d72.jpg?v=1655888040",
      img2: "https://static.cilory.com/480480-thickbox_default/indigo-wash-rugged-round-neck-full-sleeve-t-shirt.jpg",
      title: "kldfhkldhfnk",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0055_aacdad05-1d72-4a19-9874-84caad561d72.jpg?v=1655888040",
      title: "dkjbfvkdhgvkdhkh",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0055_aacdad05-1d72-4a19-9874-84caad561d72.jpg?v=1655888040",
      title: "dfkgvndkfnlmnls",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0055_aacdad05-1d72-4a19-9874-84caad561d72.jpg?v=1655888040",
      title: "kdxhfksdhfgksdhk",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const data = await axios.get(process.env.REACT_APP_API_URL+"/products",{
          headers:{
            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
          }
        })
        console.log(data)
      } catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[])

  return (
    <div className="feature">
      <div className="container">
        <div className="feature-container">
          <div className="feature-top">
            <h1>{type} Products</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis laboriosam sunt beatae similique necessitatibus
              doloribus quasi iste, expedita cumque totam magni esse delectus
              provident vitae quae rerum, eum veritatis voluptatum molestiae
              aliquid. Recusandae, vero nostrum?
            </p>
          </div>
          <div className="feature-bottom">
            {data.map(item => (
                <Card item={item} key={item.id}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
