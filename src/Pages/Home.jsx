import React from 'react'
import BelowNavbar from '../Components/BelowNavbar'
import Footer from '../Components/Footer'
import Slide from '../Components/Slide'
import MensFasion from './MensFashion'



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