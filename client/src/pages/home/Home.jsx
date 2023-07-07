import React from 'react'
import "./home.css"
import Slider from '../../components/slider/Slider'
import Featured from '../../components/featured/Featured'
import Category from '../../components/category/Category'
import Contact from '../../components/contact/Contact'

const Home = () => {
  return (
    <div className="home">
        <Slider/>
        <Featured type="Featured"/>
        <Category/>
        <Featured type="Trending"/>
        <Contact/>
    </div>
  )
}

export default Home