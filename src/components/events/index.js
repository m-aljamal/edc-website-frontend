import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import EventsList from "./EventsList"
import HeroContent from "../shared/HeroContent"
import { useEventsText } from "../../constant/text"
const Events = ({ lang }) => {
  const { hero } = useStaticQuery(graphql`
    {
      hero: sanityOtherHeroImgs(title: { eq: "about" }) {
        image {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  const { heroTitle } = useEventsText()
  return (
    <>
      <HeroContent
        fluid={hero.image.asset.fluid}
        heroTitle={heroTitle.heroTitle}
        heroBody={heroTitle.heroBody}
      />
      <EventsList />
    </>
  )
}

export default Events
