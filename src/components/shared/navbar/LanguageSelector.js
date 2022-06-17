import React, { useEffect } from "react"
import { navigate } from "gatsby"
import { useLang } from "../../../context/lang-context"

const LanguageSelector = ({ location }) => {
  const [lang, setLang] = useLang()

  useEffect(() => {
    if (location.pathname.includes("/en")) {
      setLang("en")
    } else {
      setLang("ar")
    }
  }, [location, setLang])

  const setArabic = () => {
    navigate(location.pathname.replace("/" + lang + "/", "/"))
  }

  const setEnglish = () => {
    navigate(`/en${location.pathname}`)
  }

  const languges = [
    {
      name: "English",
      change: setEnglish,
      id: 1,
    },

    {
      name: "عربي",
      change: setArabic,
      id: 3,
    },
  ]

  return (
    <div className=" px-10 lg:px-0 py-2 lg:py-0 w-full text-center lg:w-auto  ">
      <LanguageSelectorButton
        change={lang === "ar" ? languges[0].change : languges[1].change}
        name={lang === "ar" ? languges[0].name : languges[1].name}
      />
    </div>
  )
}

export default LanguageSelector

const LanguageSelectorButton = ({ change, name }) => {
  return (
    <button onClick={change} className=" cursor-pointer font-medium">
      <span className=" text-lg text-gray-800 font-bold">{name}</span>
    </button>
  )
}
