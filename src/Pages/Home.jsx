import React from 'react'
import BelowNavbar from '../Components/BelowNavbar'
import Footer from '../Components/Footer'
import Slide from '../Components/Slide'
import Login from './Login'
import MensFasion from './MensFashion'
import Register from "./Register"



const Home = () => {
  return (
    <div>
      <Slide />
      <BelowNavbar />
      <MensFasion/>
      <Footer />
    </div>
  )
}

export default Home