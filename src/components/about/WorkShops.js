import React from "react"
import Title from "../shared/Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useProjectText } from "../../constant/text"
const WorkShops = () => {
  const { images } = useStaticQuery(graphql`
    {
      images: allSanityWorkShops {
        nodes {
          image {
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)

  const { workshopsText } = useProjectText()

  return (
    <div className="container">
      <Title title={workshopsText.title} />
      <div className="mt-8">
        <p className="md:text-xl text-lg text-gray-800">{workshopsText.body}</p>
        <div className="grid md:grid-cols-4  gap-5 my-8">
          {images.nodes.map((image, i) => (
            <Img
              fluid={image.image.asset.fluid}
              alt="img1"
              key={i}
              className="rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkShops
