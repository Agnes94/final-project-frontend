import React from 'react'
import { NavBar } from 'Components/NavBar'
import { PlantForm } from '../Forms/PlantForm'
import { HamburgerMenu } from 'Components/HamburgerMenu'
import 'Styling/plantsPage.css'


export const PlantFormPage = () => {

  return (
    <section className="plants-page">
      <div className="navbar-plantform"><NavBar /></div>
      <div className="hamburger-plantform"><HamburgerMenu /></div>
      <div className="plants-container">
        <PlantForm />
      </div>
    </section>
  )
}

