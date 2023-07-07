import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact">
        <div className="container">
            <div className="contact-container">
                <span>Get In Touch With Us</span>
                <div className="contact-mail">
                    <input type="text" placeholder='Enter your mail'/>
                    <button>Join us</button>
                </div>
                <div className="contact-icons">
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact