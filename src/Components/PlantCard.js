import React from 'react';
import 'Styling/plantCard.css'
import trashicon from 'Assets/trashicon.ico'

export const PlantCard = ({ name, location, type, acquiredAt, waterAt, notes, onClickDelete, image }) => {

  return (
    <div className="plant-card">
      <div className="image-container">
        <img className="upload-image" src={image} />
      </div>
      <div className="plantcard-values">
        <h2>Name of plant: <span>{name}</span></h2>
        <h2>Location: <span>{location}</span></h2>
        <h2>Type: <span>{type}</span></h2>
        <h2>Acquired at: <span>{acquiredAt}</span></h2>
        <h2>Next watering: <span>{waterAt}</span></h2>
        <h2>Notes: <span>{notes}</span></h2>
      </div>
      <img className="delete-icon" src={trashicon} onClick={onClickDelete} />
    </div>
  )
}
