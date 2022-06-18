import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Projects from "./Projects"
import WorkShops from "../about/WorkShops"
import HeroContent from "../shared/HeroContent"
import { useProjectText } from "../../constant/text"
const ProjectsPage = () => {
  const { hero } = useStaticQuery(graphql`
    {
      hero: sanityOtherHeroImgs(title: { eq: "projects" }) {
        name
        image {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

      student: sanityBanners(title: { eq: "studentSeccess" }) {
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

  const { heroText } = useProjectText()
  return (
    <div>
      <HeroContent
        fluid={hero.image.asset.fluid}
        heroTitle={heroText.heroTitle}
        heroBody={heroText.heroBody}
      />

      <Projects />
      <WorkShops />
    </div>
  )
}

export default ProjectsPage
