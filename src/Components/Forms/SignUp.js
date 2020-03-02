import React, { useState } from 'react'

const URL = 'http://localhost:8000/users'

export const SignUp = () => {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

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

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          className="button"
          type="submit"
          disabled={name.length < 4 || password.length < 4 ? true : false}
          onClick={handleSubmit}>
          SIGN UP
      </button>
      </form>

      {errorMessage && <div><p>{errorMessage}</p></div>}
      {message && <div><p>{message}</p></div>}


    </div >
  )
}


