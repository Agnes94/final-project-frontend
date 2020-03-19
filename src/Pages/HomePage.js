import React from 'react'
import "Styling/homePage.css"
import homevector2 from 'Assets/homevector2.png'
import { useHistory } from 'react-router-dom'
import { NavBar } from '../Components/NavBar'
import { HamburgerMenu } from '../Components/HamburgerMenu'


export const HomePage = () => {

  const history = useHistory();

  return (
    <section>
      <div className="hamburger-menu"> <HamburgerMenu /> </div>
      <div className="navbar"> <NavBar /> </div>
      <div className="home-page">
        <div className="home-text">
          <h1>No more killing your houseplants!</h1>
          <h2> Click on the button below to create a new profile for your houseplant and receive an e-mail notification when it's time to water them!</h2>
          <button className="home-btn" onClick={() => history.push("/plants")}> Create profile </button>
        </div>
        <div>
          <img className="home-vector" src={homevector2} />
        </div>
      </div>
    </section>
  )
}
