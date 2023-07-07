import React, { useState } from 'react'
import "./slider.css"

const Slider = () => {

    const [curr, setCurr] = useState(0);

    const prevSlide = () => {
        setCurr(curr === 0 ? 2 : (prev) => prev - 1)
    }
    const nextSlide = () => {
        setCurr(curr === 2 ? 0 : (prev) => prev + 1)
    }

    const data = [
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1514772145214-48bce0dff081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    ];

  return (
    <div className="slider">
        <div className="slider-container" style={{transform:`translateX(-${curr*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="slider-icons">
            <div className="slider-icon" onClick={prevSlide}>a</div>
            <div className="slider-icon" onClick={nextSlide}>b</div>
        </div>
    </div>
  )
}

export default Slider