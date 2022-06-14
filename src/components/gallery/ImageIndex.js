import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const GalleryIndex = () => {
  const [select, setSelect] = React.useState("الكل")
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

  const categoriesFilter = categories.nodes.filter(
    category =>
      images.nodes.find(image => image.category.id === category.id) !==
      undefined
  )
  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row  gap-5 justify-center my-5 ">
        <CatButton
          onClick={() => setSelect("الكل")}
          select={select}
          title="الكل"
        />
        {categoriesFilter.map(({ id, title }) => (
          <CatButton
            key={id}
            title={title}
            onClick={() => setSelect(title)}
            select={select}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {images.nodes
          .filter(
            ({ category: { title } }) => title === select || select === "الكل"
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

const CatButton = ({ title, onClick, select }) => {
  return (
    <button
      className={`${
        select === title ? "text-mainblue" : "text-gray-400"
      }  font-bold text-lg cursor-pointer`}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
