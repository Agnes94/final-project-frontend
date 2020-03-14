import React from 'react'
import { NavBar } from 'Components/NavBar';
import { PlantSummary } from 'Components/PlantList';


export const Articles = () => {
  return (
    <section>
      <NavBar />
      <div>
        <PlantSummary />
      </div>
    </section>
  )
}
