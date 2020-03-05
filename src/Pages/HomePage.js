import React from 'react'
import "Pages/homePage.css"
import { useHistory } from 'react-router-dom';
import { HamburgerMenu } from '../Components/HamburgerMenu'


export const HomePage = () => {
  return (
    <div>
      <HamburgerMenu />
      Hello Welcome to Plant Care!
    </div>
  )
}
