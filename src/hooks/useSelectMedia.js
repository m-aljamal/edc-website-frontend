import { useEffect, useState } from "react"
import { useLang } from "../context/lang-context"

export const useSelectMedia = (categories, mediaArray) => {
  const [lang] = useLang()
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

  useEffect(() => {
    if (window.location.pathname.includes("en")) {
      setSelect("All")
    }
  }, [])

  return {
    select,
    setSelect,
    categoriesFilter,
    all: all_lang[lang],
    filteredMedia,
  }
}
