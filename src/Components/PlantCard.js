import React from 'react';
import leaf from 'Assets/leaf.png';
import 'Styling/plantCard.css'

export const PlantCard = ({ name, location, type, acquiredAt, waterAt, notes, /* image */ onClickDelete, onClickEdit }) => {

  return (
    <div className="plant-card">
      <img className="img-logo" src={leaf} />
      <h2>Name of plant: <span>{name}</span></h2>
      <h2>Location: <span>{location}</span></h2>
      <h2>Type: <span>{type}</span></h2>
      <h2>Acquired at: <span>{acquiredAt}</span></h2>
      <h2>Next watering: <span>{waterAt}</span></h2>
      <h2>Notes: <span>{notes}</span></h2>
      {/*  <div>{image}</div> */}
      <button className="delete-button" onClick={onClickDelete} > Delete </button >
      {/*  <button className="delete-button" onClick={onClickEdit} > Edit </button > */}
    </div>
  )
}
