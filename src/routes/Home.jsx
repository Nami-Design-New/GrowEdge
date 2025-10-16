import React from 'react'
import HeroSection from '../components/home/HeroSection'
import About from '../components/home/AboutSection'
import StatsSection from '../components/home/StatsSection'
import CareerSection from '../components/home/CareerSection'
import Why from '../components/home/why'
import HowItWork from '../components/home/HowItWork'
import ReviewsSection from '../components/home/ReviewsSection'

export default function Home() {
  return (
    <>
      <HeroSection/>
     <About/>
     <StatsSection />
     <CareerSection/>
     <Why/>
     <HowItWork/>
     <ReviewsSection/>
</>
  )
}
