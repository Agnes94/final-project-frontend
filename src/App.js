import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { plants } from 'Reducers/plants'
import { HomePage } from 'Pages/HomePage'
import { AboutPage } from 'Pages/AboutPage'
import { Articles } from 'Pages/Articles'
import { Login } from './Forms/LogIn'
import { SignUp } from './Forms/SignUp'
import { MyPlants } from 'Pages/PlantsPage'
import { Footer } from './Components/Footer'

const reducer = combineReducers({
  plants: plants.reducer,
})

export const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

