import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart';

const Navbar = () => {

    const [openCart, setOpenCart] = useState(false);

  return (
    <div className="navbar">
        <div className="container">
            <div className="navbar-container">
                <div className="navbar-left">
                    <p className='nav-logo'>Logo</p>
                    <div className="nav-list">
                        <ul>
                            <Link to="/products/1"><li><a href="">Women</a></li></Link>
                            <Link to="/products/2"><li><a href="">Men</a></li></Link>
                            <Link to="/products/3"><li><a href="">Children</a></li></Link>
                            <Link to="/products/4"><li><a href="">Accessories</a></li></Link>
                        </ul>
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="nav-list">
                        <ul>
                            <Link to=""><li><a href="">Homepage</a></li></Link>
                            <Link to=""><li><a href="">About</a></li></Link>
                            <Link to=""><li><a href="">Contact</a></li></Link>
                            <Link to=""><li><a href="">Stores</a></li></Link>
                        </ul>
                        <div className="nav-icons">
                            <p>search</p>
                            <p>profile</p>
                            <p>favoirites</p>
                            <div className="cart-icon" onClick={() => setOpenCart(!openCart)}>
                                <p>cart</p>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            openCart && <Cart/>
        }
    </div>
  )
}

export default Navbar