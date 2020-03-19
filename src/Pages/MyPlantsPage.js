import React from 'react'
import { NavBar } from 'Components/NavBar';
import { PlantSummary } from 'Components/PlantList';
import { HamburgerMenu } from 'Components/HamburgerMenu'
import 'Styling/myPlantsPage.css'

export const MyPlantsPage = () => {
  return (
    <section>
      <div className="navbar-plantspage"><NavBar /></div>
      <div className="hamburger-menu-plantspage"><HamburgerMenu /></div>
      <div>
        <PlantSummary />
      </div>
    </section>
  )
}
