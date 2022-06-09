import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const GalleryIndex = () => {
  const [select, setSelect] = React.useState("all")
  const { images } = useStaticQuery(graphql`
    {
      images: allSanityGallaryImage {
        nodes {
          id
          category {
        id
        title
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
    }
  `)
console.log(select);
  return (
    <div className="container">
      {/* <ul className="flex gap-5 justify-center my-5">
        <li
          className="text-gray-500 font-bold text-lg"
          onClick={() => setSelect("all")}
        >
          الكل
        </li>
        {images.nodes.map(({ id, title }) => (
          <li
            key={id}
            className="text-gray-500 font-bold text-lg"
            onClick={() => setSelect(title)}
          >
            {title}
          </li>
        ))}
      </ul> */}
      <p>test</p>
    </div>
  )
}

export default GalleryIndex
