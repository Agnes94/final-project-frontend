import React from 'react'
import { NavBar } from 'Components/NavBar';
import { PlantSummary } from 'Components/PlantList';


export const MyPlantsPage = () => {
  return (
    <section>
      <NavBar />
      <div>
        <PlantSummary />
      </div>
    </section>
  )
}
