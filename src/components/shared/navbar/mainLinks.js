import React from "react"
import { Link } from "gatsby"
import LanguageSelector from "./LanguageSelector"
export default ({ lang, location, size, visible, showSidebar }) => {
  const [showSubLinks, setShowSubLinks] = React.useState(false)

  const mainLinks = [
    {
      id: 1,
      arabicText: "الرئيسية",
      englishText: "Home",
      turkText: "tukish",
      url: "/",
    },
    {
      id: 2,
      arabicText: "من نحن",
      englishText: "About us",
      turkText: "tukish",
      url: "/about",
    },
    {
      id: 3,
      arabicText: "المشاريع",
      englishText: "Projects",
      turkText: "tukish",
      url: "/projects",
    },
    {
      id: 4,
      arabicText: "الفعاليات",
      englishText: "events",
      turkText: "tukish",
      url: "/events",
    },
    {
      id: 5,
      arabicText: "تواصل معنا",
      englishText: "Contact us",
      turkText: "tukish",
      url: "/contact",
    },
    {
      id: 6,
      arabicText: "المعرض",
      englishText: "Gallery",
      turkText: "tukish",
      url: "#",
      subLinks: [
        {
          id: 6.1,
          arabicText: "الصور",
          englishText: "Photos",
          url: "/images",
        },
        {
          id: 6.2,
          arabicText: "فيديو",
          englishText: "Videos",
          url: "/videos",
        },
      ],
    },
  ]
  return (
    <nav className="">
      <div className="  lg:flex gap-5 pt-8  ">
        {mainLinks.map(link => (
          <button
            className=" text-lg font-bold text-gray-800 hover:bg-gray-200 lg:hover:bg-transparent  px-10 lg:px-0 py-2 lg:py-0 relative"
            key={link.id}
            onClick={
              link.subLinks ? () => setShowSubLinks(!showSubLinks) : null
            }
          >
            <Link
              activeClassName="text-mainblue"
              to={lang === "ar" ? link.url : "/" + lang + link.url}
            >
              {lang === "ar" ? link.arabicText : link.englishText}
            </Link>
            
            {link.subLinks && (
              <div
                className={`absolute left-0  bg-gray-100 p-4 rounded-md shadow-md  ${
                  showSubLinks ? "block " : "hidden"
                }`}
              >
                
                {link.subLinks.map(subLink => (
                  <Link
                    activeClassName="text-mainblue"
                    to={lang === "ar" ? subLink.url : "/" + lang + subLink.url}
                    key={subLink.id}
                    className="text-gray-800 hover:text-mainblue block"
                  >
                    {lang === "ar" ? subLink.arabicText : subLink.englishText}
                  </Link>
                ))}
              </div>
            )}
          </button>
        ))}
        <LanguageSelector lang={lang} location={location} />
      </div>
      <div></div>
    </nav>
  )
}
