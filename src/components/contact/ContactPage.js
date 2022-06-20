import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CallUs from "./CallUs"
import LeaveMessage from "./LeaveMessage"
import Location from "./Loaction"
import Donate from "../donate/IndexPage"
import HeroContent from "../shared/HeroContent"
import { useContactText } from "../../constant/text"
const ContactPage = () => {
  const { img } = useStaticQuery(graphql`
    {
      img: sanityOtherHeroImgs(title: { eq: "contact" }) {
        title
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

  const { contactText } = useContactText()
  return (
    <>
      <HeroContent
        fluid={img.image.asset.fluid}
        heroTitle={contactText.heroTitle}
        heroBody={contactText.heroBody}
      />
      <CallUs />
      <LeaveMessage />
      <Location />
      <Donate />
    </>
  )
}

export default ContactPage
