import React from "react"
import { useSelectMedia } from "../../hooks/useSelectMedia"
import { CatButton } from "./ImageIndex"
import { useStaticQuery, graphql } from "gatsby"
import { useLang } from "../../context/lang-context"
const VideoIndex = () => {
  const [lang] = useLang()
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

  const {
    categoriesFilter,
    select,
    setSelect,
    all,
    filteredMedia,
  } = useSelectMedia(categories.nodes, videos.nodes)

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row  gap-5 justify-center my-5 ">
        <CatButton onClick={() => setSelect(all)} select={select} title={all} />
        {categoriesFilter.map(({ id, title, title_en }) => (
          <CatButton
            key={id}
            title={lang === "ar" ? title : title_en}
            onClick={() => setSelect(title)}
            select={select}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredMedia.map(({ id, viedo, category }) => (
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
