import { useState } from "react"

export const useSelectMedia = (lang, categories, mediaArray) => {
  const all_lang = {
    ar: "الكل",
    en: "All",
  }

  const [select, setSelect] = useState(all_lang[lang])
  const categoriesFilter = categories?.filter(
    category =>
      mediaArray.find(media => media.category.id === category.id) !== undefined
  )

  const filteredMedia = mediaArray.filter(
    ({ category: { title, title_en } }) =>
      title === select || title_en === select || select === all_lang[lang]
  )

  return {
    select,
    setSelect,
    categoriesFilter,
    all: all_lang[lang],
    filteredMedia,
  }
}
