import React from 'react'
import { HomePage } from 'Pages/HomePage'
import { AboutPage } from 'Pages/AboutPage'
import { MyPlantsPage } from 'Pages/MyPlantsPage'
import { Login } from './Forms/LogIn'
import { SignUp } from './Forms/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MyPlants } from 'Pages/MyPlantsPage'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'



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
      <Footer />
    </BrowserRouter>
  )
}

