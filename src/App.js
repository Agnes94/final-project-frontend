import React from 'react'
import { HomePage } from 'Pages/HomePage'
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
          <HomePage />
        </Route>
        <Route path="/plants">
          < MyPlants />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

