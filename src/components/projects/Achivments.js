import React from "react"
import Title from "../shared/Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectNumber from "./ProjectNumber"
import { useAboutText } from "../../constant/text"
import { useLang } from "../../context/lang-context"

const Achivments = () => {
  const { ach, image, earth } = useStaticQuery(graphql`
    {
      ach: allSanityProjectsAchievements {
        nodes {
          name {
            ar
            en
          }
          number
          image {
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      image: sanityBanners(title: { eq: "achivBackground" }) {
        image {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      earth: sanityBanners(title: { eq: "achErth" }) {
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
  const { achivmentTitle } = useAboutText()
  const [lang] = useLang()
  return (
    <div className="py-20 relative">
      <Title title={achivmentTitle.title} />
      <div className="flex  relative  mt-8">
        <div className="md:w-4/5 w-full  grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
          <div
            className={`absolute  w-4/5 md:w-1/3 bottom-0 transform ${
              lang === "en" ? "rotate-180" : ""
            } `}
          >
            <Img fluid={earth.image.asset.fluid} />
          </div>
          {ach.nodes.map((ach, i) => (
            <ProjectNumber data={ach} key={i} />
          ))}
        </div>
        <div className="w-1/5  hidden sm:flex ">
          <Img
            fluid={image.image.asset.fluid}
            className=" rounded-tr-md rounded-br-md w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Achivments
