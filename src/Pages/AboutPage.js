import React from 'react'
import { NavBar } from 'Components/NavBar';
import { HamburgerMenu } from 'Components/HamburgerMenu'
import aboutimage from 'Assets/aboutimage.jpg'
import 'Styling/aboutPage.css'

export const AboutPage = () => {
  return (
    <>
      <div className="aboutpage-navbar"><NavBar /></div>
      <div className="aboutpage-hamburger-menu"><HamburgerMenu /></div>
      <section className="about-page">
        <div className="about-content">
          <h1>Peace of Mind About Your Plant’s Health</h1>
          <h2>PlantCare makes tracking houseplants fun and easy, so that anyone can be a successful plant parent. </h2>
          <h2>It is for:</h2>
          <ul className="about-list">
            <li><span>🌿 Collectors</span> - Crazy plant ladies</li>
            <li><span>🌿 Beginners</span> - Anyone can be a successful plant parent.</li>
            <li><span>🌿 Innovators</span> - Turn over a new leaf. Stop murdering your plants.</li>
            <li><span>🌿 Environmentally conscious</span> - Saving the planet one plant at a time.</li>
          </ul>
        </div>
        <div className="image-wrapper">
          <img className="about-image" alt="illustration of plants and people" src={aboutimage} />
        </div>
      </section>
    </>
  )
}


