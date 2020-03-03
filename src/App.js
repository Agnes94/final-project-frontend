import React from 'react'
/* import { RegistrationPage } from 'Pages/RegistrationPage' */
import background2 from './Assets/background2.jpg'
import { Login } from './Components/Forms/LogIn'
import { SignUp } from './Components/Forms/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { MyPlantsPage } from 'Pages/MyPlantsPage'


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/plants">
          < MyPlantsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


//Background image idea
{/* <section style={{

  backgroundImage: `url(${background2})`
}}>
  <h1>Welcome to my plant app!</h1>
  <Login />
  <SignUp />
</section >  */}