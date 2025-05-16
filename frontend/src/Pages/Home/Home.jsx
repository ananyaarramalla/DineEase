import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Reviews from '../../components/Reviews'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <Team/>
      <Reservation/>
      <Reviews />
      <Footer/>
    </>
  )
}

export default Home;