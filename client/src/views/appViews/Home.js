import React from 'react'
import Navbar from '../../components/Home/Navbar'
import Hero from '../../components/Home/Hero'
import AboutMe from '../../components/Home/AboutMe'
import Works from '../../components/Home/Works'
import Services from '../../components/Home/Services'
import Resources from '../../components/Home/Resources'
import Assessment from '../../components/Home/Assessment'
import Footer from '../../components/Home/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Works/>
      <Services/>
      <Resources/>
      <Assessment/>
      <Footer/>
    </div>
  )
}
