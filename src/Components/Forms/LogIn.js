import React, { useState } from 'react'

const URL = 'http://localhost:8000/login'

export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState('')

  const onLoggedIn = event => {
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
  }

  return (
    <div>
      <form onSubmit={onLoggedIn}>
        <h3>Login with email and password</h3>
        <label>
          <input className="log-in" value={email} type="email" placeholder="Email" required onChange={event => setEmail(event.target.value)} />
        </label>
        <label>
          <input className="log-in" value={password} type="password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
        </label>
        <button
          type="submit"
          disabled={password.length < 4 ? true : false}
          onClick={onLoggedIn}>
          Log in
        </button>
      </form >
      {errorMessage && <div>{errorMessage}</div>}
    </div >
  )
}

