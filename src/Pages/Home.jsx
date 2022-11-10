import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Product } from '../UI/Product'
import MensFasion from './MensFashion'
import Routing from './Routing'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Routing /> */}
      {/* <Product/> */}
      <MensFasion/>
      <Footer />
      
    </div>
  )
}

export default Home
