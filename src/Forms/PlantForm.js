import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { plantForm } from 'Services/auth'

/* const location = ["Kitchen", "Living room", "Hall", "Bedroom", "Other"];
 */
export const PlantForm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [acquiredAt, setAcquiredAt] = useState("");
  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState("");
  const [waterAt, setWaterAt] = useState("");
  const [errorMessage, setErrorMessage] = useState(false)
  const history = useHistory();

  const handlePlantForm = async event => {
    event.preventDefault();
    const response = await plantForm(name, location, acquiredAt, type, notes, waterAt);
    if (response.success && name && type) {
      history.push("/plants");
      return;
    }
    setErrorMessage(true);
  };


  return (
    <div className="form-container" >
      <form className="form-style">
        <label>
          <h2 className="plant-name">What is the name of your plant?</h2>
          <input
            value={name}
            type="text"
            required
            onChange={event => setName(event.target.value)}
             /*  value={name} */ />
        </label>

        <h2>Where is your plant located?</h2>
        <select
          value={location}
          className="dropdown"
          onChange={event => setLocation(event.target.value)}
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
            value={acquiredAt}
            type="date"
            required
            onChange={event => setAcquiredAt(event.target.value)}
             /*  value={date} */ />
        </label>

        <label>
          <h2 className="plant-type">What type of plant is it?</h2>
          <input
            value={type}
            type="text"
            required
            onChange={event => setType(event.target.value)}
              /* value={type} */ />
        </label>

        <label>
          <h2 className="plant-notes">Any notes?</h2>
          <input
            value={notes}
            type="text"
            required
            onChange={event => setNotes(event.target.value)}

          />
        </label>
        <div>{errorMessage}</div>

        {/*    Here comes the image upload if I figure it out */}

        <label>
          <h2 className="plant-date">When do you water this plant?</h2>
          <input
            value={waterAt}
            type="date"
            required
            onChange={event => setWaterAt(event.target.value)}
          />
        </label>

        <button onClick={event => handlePlantForm(event)}>Submit</button>
      </form>
    </div>
  )
}
