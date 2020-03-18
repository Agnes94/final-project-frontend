import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const editPlantCard = () => {

  const dispatch = useDispatch()
  const plants = useSelector(state => state.plants.plants)

  const [formData, setFormData] = useState({

    name=plants.name || '',
    location=plants.location || '',
    type=plants.type || '',
    acquiredAt=plants.acquiredAt || '',
    waterAt=plants.waterAt || '',
    notes=plants.notes || ''

  })


  useEffect(() => {
    setFormData(plant)
  }, [plant])

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(editPlants(formData, plant))
  }

  return (
    <>
      {open && (


        <form className="form-style" onSubmit={handleSubmit} >

          <div className="values">
            <label>
              <h2>What is the name of your plant?</h2>
              <input
                value={formData.name}
                type="text"
                required
                onChange={event => setFormData({ ...formData, name: event.target.value })} />
            </label>

            <h2>Where is your plant located?</h2>
            <select
              value={formData.location}
              className="dropdown"
              onChange={event => setFormData({ ...formData, location: event.target.value })}
           /*  value={location} */>
              <option value="Locations">Locations</option>
              <option value="Kitchen"> Kitchen</option>
              <option value="Living room">Living room</option>
              <option value="Hall">Hall</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Other">Other</option>
            </select>

            <label>
              <h2>When did you get this plant?</h2>
              <input
                value={formData.acquiredAt}
                type="date"
                required
                onChange={event => setFormData({ ...formData, acquiredAt: event.target.value })} />
            </label>

            <label>
              <h2>What type of plant is it?</h2>
              <input
                value={formData.type}
                type="text"
                required
                onChange={event => setFormData({ ...formData, type: event.target.value })} />
            </label>

            <label>
              <h2>Any notes?</h2>
              <input
                value={formData.notes}
                type="text"
                required
                onChange={event => setFormData({ ...formData, notes: event.target.value })} />
            </label>


            <label>
              <h2 className="plant-date">When do you water this plant?</h2>
              <input
                value={formData.waterAt}
                type="date"
                onChange={event => setFormData({ ...formData, waterAt: event.target.value })}
              />
            </label>
            <br />
            <button className="form-button" type='submit'>Submit</button>
            <button type='button' title='X' onClick={handleClose} />
          </div>
        </form>
      )
      }
    </>
  )
}