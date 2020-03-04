import React from 'react'
import { LoginUser } from '../Forms/LogIn';

export const LogoutUser = props => {
  //If this is active, the function runs without pressing the button
  // const accessToken = localStorage.removeItem('accessToken')

  const onLoggedOut = event => {
    event.preventDefault()
    window.localStorage.removeItem('accessToken')
  }

  return (
    <div>
      <button
        className="button"
        type="submit"
        onClick={onLoggedOut}>
        Log out
        </button>
    </div>
  )
}