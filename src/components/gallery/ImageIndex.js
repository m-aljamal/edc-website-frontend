import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useSelectMedia } from "../../hooks/useSelectMedia"
const GalleryIndex = ({ lang }) => {
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
          
        }
      }
    }
  `)
  const {
    categoriesFilter,
    select,
    setSelect,
    all,
    filteredMedia,
  } = useSelectMedia(lang, categories.nodes, images.nodes)

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row  gap-5 justify-center my-5 ">
        <CatButton onClick={() => setSelect(all)} select={select} title={all} />
        {categoriesFilter.map(({ id, title, title_en }) => (
          <CatButton
            key={id}
            title={lang === "ar" ? title : title_en}
            onClick={() => setSelect(lang === "ar" ? title : title_en)}
            select={select}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredMedia.map(({ id, image, category }) => (
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

export const CatButton = ({ title, onClick, select }) => {
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
