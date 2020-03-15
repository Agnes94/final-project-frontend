import React, { useState } from 'react'
import { plants } from 'Reducers/plants'
import { useDispatch } from 'react-redux'
import {addPlants} from "../Reducers/plants";


export const PlantForm = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    acquiredAt: '',
    type: '',
    notes: '',
    image: '',
    waterAt: '',
  })

  const clearForm = () => {
    setFormData({
      name: '',
      location: '',
      acquiredAt: '',
      type: '',
      notes: '',
      image: '',
      waterAt: ''
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(plants.actions.addPlant(formData)) //sending form data to the reducer
    clearForm()
    /*    dispatch(actions.addPlant(true)) */
  }

  return (
    <form className="form-style" onSubmit={handleSubmit} >
      <label>
        <h2 className="plant-name">What is the name of your plant?</h2>
        <input
          value={formData.name}
          type="text"
          required
          onChange={event => setFormData({ ...formData, name: event.target.value })}
             /*  value={name} */ />
      </label>

      <h2>Where is your plant located?</h2>
      <select
        value={formData.location}
        className="dropdown"
        onChange={event => setFormData({ ...formData, location: event.target.value })}
           /*  value={location} */>
        <option value="">Locations</option>
        <option value="Kitchen"> Kitchen</option>
        <option value="Living room">Living room</option>
        <option value="Hall">Hall</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Other">Other</option>
      </select>

      <label>
        <h2 className="plant-date">When did you get this plant?</h2>
        <input
          value={formData.acquiredAt}
          type="date"
          required
          onChange={event => setFormData({ ...formData, acquiredAt: event.target.value })} />
      </label>

      <label>
        <h2 className="plant-type">What type of plant is it?</h2>
        <input
          value={formData.type}
          type="text"
          required
          onChange={event => setFormData({ ...formData, type: event.target.value })} />
      </label>

      <label>
        <h2 className="plant-notes">Any notes?</h2>
        <input
          value={formData.notes}
          type="text"
          required
          onChange={event => setFormData({ ...formData, notes: event.target.value })} />
      </label>
      {/*     <div>{errorMessage}</div> */}

      {/*    Here comes the image upload if I figure it out */}

      <label>
        <h2 className="plant-date">When do you water this plant?</h2>
        <input
          value={formData.waterAt}
          type="date"
          onChange={event => setFormData({ ...formData, waterAt: event.target.value })}
        />
      </label>

      <button type='submit'>Submit</button>
    </form>
  )
}


