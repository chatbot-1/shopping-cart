import React from 'react'
import "./list.css"
import Card from '../card/Card';

const List = () => {

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
        {
          id: 5,
          img: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0055_aacdad05-1d72-4a19-9874-84caad561d72.jpg?v=1655888040",
          title: "kdxhfksdhfgksdhk",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
      ];

  return (
    <div className="list">
        {data?.map(item => (<Card item={item} key={item.id}/>))}
    </div>
  )
}

export default List