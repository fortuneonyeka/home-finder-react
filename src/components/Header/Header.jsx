import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <a href="/">
          <img src="./homefinderlogo.png" alt="logo" width={50} className="logo" />
        </a>

          <div className="flexCenter h-menu">
            <a href="">Homes</a>
            <a href="">Our Core Values</a>
            <a href="">Contact Us</a>
            <a href=""> Get Started</a>
            <button className="button">
            <a href="">Contact</a>
            </button>
          </div>
      </div>
    </section>
  )
}

export default Header