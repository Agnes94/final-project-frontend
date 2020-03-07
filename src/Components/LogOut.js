import React from 'react'

export const LogoutUser = props => {
  //If this is active, the function runs without pressing the button
  // const accessToken = localStorage.removeItem('accessToken')

  const onLoggedOut = event => {
    event.preventDefault()
    window.localStorage.removeItem('accessToken')
  }

  return (
    <a
      onClick={onLoggedOut}>
      Log out
       </a>
  )
}