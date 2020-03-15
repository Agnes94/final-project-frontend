import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlantCard } from 'Components/PlantCard'
import { PlantFetch } from 'Reducers/plants'

export const PlantSummary = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(PlantFetch())
  })

  const Plants = useSelector(state => state.plants.plants)

  return (

    <div>
      {Plants.map(plants => (
        <PlantCard
          key={plants._id}
          name={plants.name}
          location={plants.location}
          acquiredAt={plants.acquiredAt}
          waterAt={plants.waterAt}
          notes={plants.notes}
        />
      ))}
    </div>

  )
}
