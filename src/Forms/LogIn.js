import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { loginUser } from 'Services/auth'
import 'Styling/formStyles.css'
import leaf from '../Assets/leaf.png'

/* 
const URL = 'http://localhost:8000/login' */

export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  const history = useHistory();

  const handleLoginUser = async event => {
    event.preventDefault();
    const response = await loginUser(email, password);
    if (response.success) {
      history.push({
        pathname: "/homepage", //haven't figured out yet which ath should I use, so put login temporarily
        username: response.name
      });
      return;
    }
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
          <button className="login-btn" onClick={event => handleLoginUser(event)}>Login</button>
          {errorMessage && <div>User not found, access forbidden</div>}
          <div>Don't have an account?  <a onClick={() => history.push("/signup")}>
            Click here.
      </a></div>
        </form>
      </div>
    </section>
  )
}

