import React from "react";
import "./cart.css"

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0055_aacdad05-1d72-4a19-9874-84caad561d72.jpg?v=1655888040",
      img2: "https://static.cilory.com/480480-thickbox_default/indigo-wash-rugged-round-neck-full-sleeve-t-shirt.jpg",
      title: "kldfhkldhfnk",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates quidem accusantium eligendi, inventore in, placeat laborum reprehenderit vel fuga repellat voluptas nisi quae quos?",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
        id: 2,
        img: "https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0055_aacdad05-1d72-4a19-9874-84caad561d72.jpg?v=1655888040",
        title: "dkjbfvkdhgvkdhkh",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates quidem accusantium eligendi, inventore in, placeat laborum reprehenderit vel fuga repellat voluptas nisi quae quos?",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
  ];

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-container">
          <h1>Products in your cart</h1>
          {data?.map(item => (
            <div className="cart-item" key={item.id}>
                <img src={item.img} alt="" />
                <dev className="cart-details">
                    <h1>{item.title}</h1>
                    {/* <p>{item.desc.substring(0, 100)}</p> */}
                    <div className="cart-price">
                        1 x ${item.price}
                    </div>
                </dev>
                <div className="delete-cart">Delete</div>
            </div>
          ))}
          <div className="cart-total">
            <span>SUBTOTAL</span>
            <span>$123</span>
          </div>
          <button className="cart-button">
            Checkout
          </button>
          <span className="cart-reset">Reset Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
