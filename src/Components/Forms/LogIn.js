import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { loginUser } from 'Services/auth'
/* 
const URL = 'http://localhost:8000/login' */

export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  const history = useHistory();

  /*   const onLoggedIn = event => {
      event.preventDefault()
  
      fetch(URL, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('The user was not found or entered password is wrong')
          }
          return res.json()
        })
  
        .then(({ accessToken }) => {
          if (accessToken) {
            window.localStorage.setItem('accessToken', accessToken)
          }
        })
        .catch(err => {
          setErrorMessage(err.message)
        })
    } */

  const handleLoginUser = async event => {
    event.preventDefault();
    const response = await loginUser(email, password);
    if (response.success) {
      history.push({
        pathname: "/plants", //haven't figured out yet which oath should I use, so put login temporarily
        username: response.name
      });
      return;
    }
    setErrorMessage(true);
  };


  return (
    <div>
      <form>
        <h3>Login with email and password</h3>
        <label>
          <input className="log-in" value={email} type="email" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
        </label>
        <label>
          <input className="log-in" value={password} type="password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
        </label>
        <button onClick={event => handleLoginUser(event)}>Login</button>
        {errorMessage && <div>User not found, access forbidden</div>}
        <button onClick={() => history.push("/register")}>
          Sign up for an account
      </button>
      </form >
      {errorMessage && <div>{errorMessage}</div>}
    </div >
  )
}

