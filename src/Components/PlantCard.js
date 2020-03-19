import React from 'react';
import leaf from 'Assets/leaf.png';
import 'Styling/plantCard.css'
import trashicon from 'Assets/trashicon.ico'

export const PlantCard = ({ name, location, type, acquiredAt, waterAt, notes, onClickDelete, image }) => {

  return (
    <div className="plant-card">
      <img className="img-logo" src={image} />
      <h2>Name of plant: <span>{name}</span></h2>
      <h2>Location: <span>{location}</span></h2>
      <h2>Type: <span>{type}</span></h2>
      <h2>Acquired at: <span>{acquiredAt}</span></h2>
      <h2>Next watering: <span>{waterAt}</span></h2>
      <h2>Notes: <span>{notes}</span></h2>
      {/*  <div>{image}</div> */}
      <img className="delete-icon" src={trashicon} onClick={onClickDelete} />
      {/*  <button className="delete-button" onClick={onClickEdit} > Edit </button > */}
    </div>
  )
}
