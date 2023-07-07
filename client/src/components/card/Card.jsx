import React from 'react'
import "./card.css"
import {Link} from "react-router-dom"

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className='card-link'>
        <div className='card'>
            <div className="card-image">
                {item.isNew && <span>New Arrrival</span>}
                <img src={item.img} alt="" className='img1'/>
                <img src={item.img2} alt="" className='img2'/>
            </div>
            <h2>{item.title}</h2>
            <div className="card-prices">
                <h3>${item.oldPrice}</h3>
                <h3>${item.price}</h3>
            </div>
        </div>
    </Link>
  )
}

export default Card