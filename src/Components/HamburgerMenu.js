import React from 'react'
import '../Pages/hamburgerMenu.css'
import { Link } from "react-router-dom"

export const HamburgerMenu = () => {
  return (
    <div className="navigation" >
      <input className="hamburger-checkbox" id="hamburger-menu" type="checkbox" />
      <label className="hamburger-mobile" htmlFor="hamburger-menu">
        <div className="bar bar-one" />
        <div className="bar bar-two" />
        <div className="bar bar-three" />
      </label>

      <ul className="mobile-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}
