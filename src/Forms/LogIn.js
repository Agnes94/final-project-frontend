import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { loginUser } from 'Services/auth'
import "Forms/formStyles.css"

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
        pathname: "/plants", //haven't figured out yet which ath should I use, so put login temporarily
        username: response.name
      });
      return;
    }
    setErrorMessage(true);
  };

  return (
    <div className="form-container">
      <div className="vector-container"></div>
      <h3>Login with email and password</h3>
      <form className="login-form">
        <label>
          <input className="login" value={email} type="email" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
        </label>
        <label>
          <input className="login" value={password} type="password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
        </label>
        <button onClick={event => handleLoginUser(event)}>Login</button>
        {errorMessage && <div>User not found, access forbidden</div>}
        <div>Don't have an account? </div>
        <button onClick={() => history.push("/signup")}>
          Sign Up
      </button>
      </form >
      {errorMessage && <div>{errorMessage}</div>}
    </div >
  )
}

