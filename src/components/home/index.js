import React from "react"
import Hero from "./Hero"
import PartnersSection from "./PartnersSection"
import SuccessStory from "./SuccessStory"
import HomePageEvents from "./HomePageEvents"
import AboutSection from "./AboutSection"
import Reports from "./Reports"

const Index = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <SuccessStory />
      <HomePageEvents />
      <Reports />
      <PartnersSection />
    </div>
  )
}

export default Index
