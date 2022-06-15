import React from "react"
import { Link } from "gatsby"
import LanguageSelector from "./LanguageSelector"
import { IoMdArrowDropdown } from "react-icons/io"

export default ({ lang, location }) => {
  const mainLinks = [
    {
      id: 1,

      ar: {
        title: "الرئيسية",
      },
      en: {
        title: "Home",
      },
      url: "/",
    },
    {
      id: 2,
      ar: {
        title: "من نحن",
      },
      en: {
        title: "About us",
      },
      url: "/about",
    },
    {
      id: 3,
      ar: {
        title: "المشاريع",
      },
      en: {
        title: "Projects",
      },
      url: "/projects",
    },
    {
      id: 4,
      ar: {
        title: "الفعاليات",
      },
      en: {
        title: "events",
      },
      url: "/events",
    },
    {
      id: 5,
      ar: {
        title: "تواصل معنا",
      },
      en: {
        title: "Contact us",
      },
      url: "/contact",
    },
  ]

  return (
    <nav>
      <div className="lg:flex  gap-5 pt-8">
        {mainLinks.map(link => (
          <button
            className=" text-lg font-bold text-gray-800 hover:text-gray-400 px-10 lg:px-0 py-2 lg:py-0  block text-center w-full lg:w-auto "
            key={link.id}
          >
            <AppLink
              text={link[lang].title}
              lang={lang}
              path={link.url}
              location={location.pathname}
            />
          </button>
        ))}
        <div className="flex justify-center">
          <div className="relative group">
            <button className="text-lg font-bold text-gray-800 flex items-center">
              {lang === "ar" ? "المعرض" : "Gallery"}
              <IoMdArrowDropdown />
            </button>
            <div className="absolute bg-gray-50 w-full hidden group-hover:block rounded z-10">
              <div className="shadow-xl w-20 ">
                <div className="px-2 text-center py-2 font-semibold">
                  <AppLink
                    text={lang === "ar" ? "الصور" : "Photos"}
                    lang={lang}
                    path="/images"
                    location={location.pathname}
                  />
                </div>
                <div className="px-2 text-center pb-2 font-semibold">
                  <AppLink
                    text={lang === "ar" ? "فيديو" : "Videos"}
                    lang={lang}
                    path="/videos"
                    location={location.pathname}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <LanguageSelector lang={lang} location={location} />
      </div>
    </nav>
  )
}

const AppLink = ({ text, path, lang, location }) => {
  if (lang === "en") {
    location = location.replace("/en", "")
  }
  return (
    <Link
      to={lang === "ar" ? path : "/" + lang + path}
      className={`${
        location === path ? "text-mainblue" : "text-gray-800"
      }  hover:text-mainblue  block`}
    >
      {text}
    </Link>
  )
}
