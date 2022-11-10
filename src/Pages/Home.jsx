import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Product } from '../UI/Product'
import Routing from './Routing'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Routing /> */}
      <Product/>
      <Footer />
      
    </div>
  )
}

export default Home
