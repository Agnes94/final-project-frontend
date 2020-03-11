import React from 'react'
import { NavBar } from 'Components/NavBar';
import { PlantForm } from '../Forms/PlantForm'
import 'Styling/plantsPage.css'


export const MyPlants = () => {

  return (
    <section className="plants-page">
      <NavBar />
      <h1>Welcome, Plant lover!</h1>
      <div className="plants-container">
        {/*  <h2>All your plants:</h2> */}
        {/*  <button className="add-btn">+ Add new plant </button> */}
        <PlantForm />
      </div>
    </section>
  )
}

