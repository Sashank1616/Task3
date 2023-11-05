import React from 'react'
import Navbar from '../components/Navbar'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
import Developers from '../components/Developers'

export default function DevPage() {
  return (
    <div>
      <Navbar/>
      <Developers/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}
