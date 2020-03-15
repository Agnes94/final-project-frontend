import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { loginUser } from 'Services/auth'
import leaf from '../Assets/leaf.png'
import 'Styling/formStyles.css'


export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  const history = useHistory();

  const handleLoginUser = async event => {
    event.preventDefault();
    const response = await loginUser(email, password);
    history.push("/home-page", {
      username: response.name
    });

    setErrorMessage(true);
  };


  return (
    <section className="login-wrapper">
      <h1>Welcome to PlantCare<img className="logo" src={leaf} /></h1>
      <div className="login-form-container">
        <div className="vector-container"></div>
        <form className="login-form">
          <h3>Login with email and password</h3>
          <div className="login-label-container">
            <label>
              <b>Email:</b>
              <input className="login" value={email} type="email" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
            </label>
            <label>
              <b>Password:</b>
              <input className="login" value={password} type="password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
            </label>
            <div>{errorMessage}</div>
          </div>
          {errorMessage && <div className="error-message">User not found</div>}
          <button className="login-btn" onClick={event => handleLoginUser(event)}>Login</button>
          <div>Don't have an account?  <a onClick={() => history.push("/signup")}>
            Click here.
      </a></div>
        </form>
      </div>
    </section>
  )
}

