import React from 'react'
import { StartPage } from 'Pages/StartPage'
import { Login } from './Forms/LogIn'
import { SignUp } from './Forms/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MyPlants } from 'Pages/MyPlantsPage'


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <StartPage />
        </Route>
        <Route path="/plants">
          < MyPlants />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


//Background image idea
/* <section style={{

  backgroundImage: `url(${background2})`
}}>
  <h1>Welcome to my plant app!</h1>
  <Login />
  <SignUp />
</section >  */