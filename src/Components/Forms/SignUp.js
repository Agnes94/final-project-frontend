import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { signUp } from 'Services/auth'

/* const URL = 'http://localhost:8000/users' */

export const SignUp = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  const history = useHistory();

  const handleSignUp = async event => {
    event.preventDefault()
    const response = await signUp(name, email, password);
    if (response.success && name && email && password) {
      history.push("/login");
      console.log("success");
      return;
    }
    setErrorMessage(true);
    console.log("error");
  };
  /* 
      fetch(URL, {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Could not create user')
          }
          return res.json()
        })
        .then((json) => {
          console.log(json)
          setMessage(json.message)
          setName("")
          setEmail("")
          setPassword("")
        })
  
        .catch(err => {
          console.log("error:", err)
          setErrorMessage(err.message)
        })
  
    } */
  return (
    <div>
      <form>
        <button onClick={() => history.push("/login")}>Log In</button>
        <h3>Create new user</h3>
        <div className="login-form">
          <label>
            <input className="register" value={name} type="text" placeholder="My name > 4 characters" required onChange={event => setName(event.target.value)} />
          </label>
          <label>
            <input className="register" value={email} type="email" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
          </label>
          <label>
            <input className="register" value={password} type="password" placeholder="Password > 4 characters" required onChange={event => setPassword(event.target.value)} />
          </label>
        </div>
        <button
          onClick={event => handleSignUp(event)}>
          SIGN UP
      </button>
      </form>
      {errorMessage && <div>Could not add user. Please try again!</div>}
    </div>
  )
}


