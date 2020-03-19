import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signUp } from 'Services/auth'
import leaf from 'Assets/leaf.png'
import 'Styling/formStyles.css'

export const SignUp = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const history = useHistory();

  const handleSignUp = async event => {
    event.preventDefault()
    const response = await signUp(name, email, password);
    if (response.success && name && email && password) {
      history.push("/login");
      return;
    }
    setErrorMessage(true);
  };

  return (
    <section>
      <h1>Welcome to PlantCare<img className="logo" src={leaf} /></h1>
      <div className="signup-form-container">
        <div className="vector-container"></div>
        <form className="signup-form">
          <h3>Create new user</h3>
          <div className="signup-label-container">
            <label>
              <b>Name:</b>
              <input className="signup-text" value={name} type="text" placeholder="Name" required onChange={event => setName(event.target.value)} />
            </label>
            <label>
              <b>Email:</b>
              <input className="signup" value={email} type="email" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
            </label>
            <label>
              <b>Password:</b>
              <input className="signup" value={password} type="password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
            </label>
          </div>
          {errorMessage && <div className="error-message">Could not create user. Please try again!</div>}
          <button
            onClick={event => handleSignUp(event)}>
            Sign up
      </button>
          <div>
            Already have an account? <a href="" onClick={() => history.push("/login")}>Click here.</a>
          </div>
        </form>
      </div>
    </section>
  )
}


