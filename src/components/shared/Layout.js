import React from "react"
import Header from "./navbar/header"
import Footer from "../shared/footer/Footer"
import AllRights from "../shared/footer/AllRights"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { LangProvider, useLang } from "../../context/lang-context"

const Layout = ({ children, location }) => {
  return (
    <>
      <LangProvider>
        <LangChildren>
        <Header location={location} />
          {children}
          <Footer />
          <AllRights />
        </LangChildren>
      </LangProvider>
    </>
  )
}

export default Layout

const LangChildren = ({ children }) => {
  const [lang] = useLang()
  return (
    <main
      className="font-sans"
      style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
    >
      {children}
    </main>
  )
}
