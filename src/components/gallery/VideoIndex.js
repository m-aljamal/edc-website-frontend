import React from "react"

import { useStaticQuery, graphql } from "gatsby"
const VideoIndex = () => {
  const [select, setSelect] = React.useState("الكل")
  const { videos, categories } = useStaticQuery(graphql`
    {
      videos: allSanityGallaryVideo {
        nodes {
          id
          viedo
          category {
            id
            title
            title_en
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
      videos.nodes.find(v => v.category.id === category.id) !== undefined
  )
  return (
    <div className="container py-12">
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
        {videos.nodes
          .filter(
            ({ category: { title } }) => title === select || select === "الكل"
          )
          .map(({ id, viedo, category }) => (
            <iframe
              key={id}
              className="w-full aspect-video"
              src={`https://www.youtube-nocookie.com/embed/${viedo}`}
              title={category.title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
            ></iframe>
          ))}
      </div>
    </div>
  )
}

export default VideoIndex
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
