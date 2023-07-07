import React, { useState } from 'react'
import "./products.css"
import List from '../../components/list/List'
import { useParams } from 'react-router-dom'

const Products = () => {

  const catId = parseInt(useParams().id)

  const [maxPrice, setMaxPrice] = useState(1000)

  const [sort, setSort] = useState(null)

  return (
    <div className="products">
      <div className="container">
        <div className="products-container">
          <div className="products-left">
            <div className="filter-item">
              <h2>Products Category</h2>
              <div className="products-input">
                <input type="checkbox" id='1' value={1}/>
                <label htmlFor="1">Shoes</label>
              </div>
              <div className="products-input">
                <input type="checkbox" id='2' value={2}/>
                <label htmlFor="2">UpperWear</label>
              </div>
              <div className="products-input">
                <input type="checkbox" id='3' value={3}/>
                <label htmlFor="3">Bottomwear</label>
              </div>
            </div>
            <div className="filter-item">
              <h2>Filter By Price</h2>
              <div className="products-input">
                <span>0</span>
                <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="filter-item">
              <h2>Sort by</h2>
              <div className="products-input">
                <input type="radio" id='asc' value="asc" name='price' onChange={e => setSort("asc")}/>
                <label htmlFor="asc">Price (Lowest to Highest)</label>
              </div>
              <div className="products-input">
                <input type="radio" id='desc' value="desc" name='price' onChange={e => setSort("desc")}/>
                <label htmlFor="desc">Price (Highest to Lowest)</label>
              </div>
            </div>
          </div>
          <div className="products-right">
            <img className='category-image' src="https://graphicgoogle.com/wp-content/uploads/2017/12/Summer-Fashion-Facebook-Cover-Design-Template.jpg" alt="" />
            <List catId={catId} maxPrice={maxPrice} sort={sort}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products