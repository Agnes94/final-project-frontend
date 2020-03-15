import React from 'react';
import leaf from '../Assets/leaf.png';
import 'Styling/plantCard.css'



export const PlantCard = ({ name, /* image, */ location, type, acquiredAt, waterAt, notes, onClickEdit, onClickDelete }) => {

  return (
    <div className="plant-card-container">
      <div className="plant-card">
        <div className="navbar-logo">
          <img className="img-logo" src={leaf} />
        </div>
        <h2>Name of plant: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Type: {type}</h2>
        <h2>Acquired at: {acquiredAt}</h2>
        <h2>Date of next watering: {waterAt}</h2>
        <h2>Notes: {notes}</h2>
        <button className="edit-button" onClick={onClickEdit} > Edit
      </button>
        <button className="delete-button" onClick={onClickDelete} > Delete
      </button >
      </div>
    </div>
  )
}