import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const GalleryIndex = () => {
  const [select, setSelect] = React.useState("all")
  const { images, categories } = useStaticQuery(graphql`
    {
      images: allSanityGallaryImage {
        nodes {
          id
          category {
            id
            title
            title_en
          }
          image {
            asset {
              fluid(maxWidth: 4000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }

      categories: allSanityCategory {
        nodes {
          title
          title_en
          id
        }
      }
    }
  `)
  console.log({ images, categories })
  return (
    <div className="container">
      <div className="flex gap-5 justify-center my-5 ">
        <button
          className="text-gray-500 font-bold text-lg cursor-pointer"
          onClick={() => setSelect("all")}
        >
          الكل
        </button>
        {categories.nodes.map(({ id, title }) => (
          <button
            key={id}
            className="text-gray-500 font-bold text-lg cursor-pointer"
            onClick={() => setSelect(title)}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {images.nodes
          .filter(
            ({ category: { title } }) => title === select || select === "all"
          )
          .map(({ id, image, category }) => (
            <div key={id} className="relative">
              <Img
                fluid={image.asset.fluid}
                className="w-full h-full rounded-md shadow-md"
                alt={category.title}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default GalleryIndex
