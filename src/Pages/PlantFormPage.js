import React from 'react'
import { NavBar } from 'Components/NavBar';
import { PlantForm } from '../Forms/PlantForm'
import 'Styling/plantsPage.css'


export const PlantFormPage = () => {

  return (
    <section className="plants-page">
      <NavBar />
      <h1>Welcome, Plant lover!</h1>
      <div className="plants-container">
        <PlantForm />
      </div>
    </section>
  )
}

