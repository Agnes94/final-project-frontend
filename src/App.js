import React from 'react'
/* import { RegistrationPage } from 'Pages/RegistrationPage' */
import background2 from './Assets/background2.jpg'
import { Login } from './Components/Forms/LogIn'
import { SignUp } from './Components/Forms/SignUp'


export const App = () => {
  return (
    <section style={{
      backgroundImage: `url(${background2})`
    }}>
      <h1>Welcome to my plant app!</h1>
      <Login />
      <SignUp />
    </section>
  )
}
