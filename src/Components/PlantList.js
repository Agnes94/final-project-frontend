import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlantCard } from 'Components/PlantCard'
import { PlantFetch } from 'Reducers/plants'
import { plants } from 'Reducers/plants'
import { ui } from 'Reducers/ui'
import 'Styling/plantList.css'
import moment from 'moment'


export const PlantSummary = () => {
  const dispatch = useDispatch()

  const Plants = useSelector(state => state.plants.plants)

  const handleDeletePlant = (plant) => {
    dispatch(plants.actions.setPlant(plant))
    dispatch(ui.actions.setConfirmDelete(true))
  }

  useEffect(() => {
    dispatch(PlantFetch())
  }, [])

  return (

    <div className="plant-list">
      {Plants.map(plants => (
        <PlantCard
          key={plants._id}
          name={plants.name}
          image={plants.image}
          type={plants.type}
          location={plants.location}
          acquiredAt={moment(plants.acquiredAt).format('ll')}
          waterAt={moment(plants.waterAt).format('ll')}
          notes={plants.notes}
          onClickDelete={() => handleDeletePlant(plants)}
        /* onClickEdit={() => handleEdit(plants)} */
        />
      ))}
    </div>

  )
}
