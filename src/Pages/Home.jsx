import React from 'react'
import Footer from '../Components/Footer'
import Slide from '../Components/Slide'
import AdminPage from './AdminPage'
import MensFasion from './MensFashion'

const Home = () => {
  return (
    <div>
      {/* <Slide /> */}
      {/* <MensFasion/> */}
      <AdminPage/>
      
      <Footer />
    </div>
  )
}

export default Home