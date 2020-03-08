import React from 'react'
import { HomePage } from 'Pages/HomePage'
import { AboutPage } from 'Pages/AboutPage'
import { MyPlantsPage } from 'Pages/MyPlantsPage'
import { Articles } from 'Pages/Articles'
import { Login } from './Forms/LogIn'
import { SignUp } from './Forms/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MyPlants } from 'Pages/MyPlantsPage'
import { Footer } from './Components/Footer'


export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home-page">
          <HomePage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/plants">
          <MyPlants />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

