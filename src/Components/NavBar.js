import React from 'react'
import 'Styling/navBar.css'
import { Link } from 'react-router-dom'
import leaf from 'Assets/leaf.png'
/* import { LogoutUser } from './LogOut'; */

export const NavBar = () => {
  return (
    <nav>
      <div className="navbar-logo">
        <img className="img-logo" src={leaf} />
      </div>

      <ul>

        <Link className="link" to={'/home-page'} >
          <li>Home</li>
        </Link>

        <Link className="link" to={'/about'} >
          <li>About</li>
        </Link>

        <Link className="link" to={'/plants'} >
          <li>Add plant</li>
        </Link>

        <Link className="link" to={'/articles'} >
          <li>My plants</li>
        </Link>

        <Link className="link" to={'/login'} >
          <li className="logout">Log out</li>
        </Link>

      </ul>

    </nav>
  )
}