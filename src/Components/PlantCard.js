import React from 'react';
import { leaf } from 'Assets/leaf.png';

export const PlantCard = ({ name, location, type, acquiredAt, waterAt, notes/*  onClickEdit, onClickDelete  */ }) => {

  return (
    <div className="plant-card">
      <div>
        <img className="img-logo" src={leaf} />
      </div>
      <h2>Name of plant: {name}</h2>
      <h2>Location: {location}</h2>
      <h2>Type: {type}</h2>
      <h2>Acquired at: {acquiredAt}</h2>
      <h2>Date of next watering: {waterAt}</h2>
      <h2>Notes: <p>{notes}</p>
      </h2>
    </div>
  )
}