import React from "react"
import MainLinks from "./mainLinks"
import SocialLinks from "./socialLinks"
import { Link } from "gatsby"

const Header = ({ location }) => {
  const [visible, setVisible] = React.useState(false)
  const showSidebar = () => {
    setVisible(!visible)
  }
  return (
    <div>
      <header>
        <nav className="flex container relative  justify-between items-center lg:items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-mainblue lg:hidden "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={showSidebar}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={`${
                !visible ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"
              }`}
            />
          </svg>
          <div className="hidden lg:block  ">
            <SocialLinks />
          </div>
          <div
            className={` ${
              !visible && "hidden "
            } absolute lg:static top-32 z-30 mx-8  lg:mx-0 bg-white left-0 right-0 border lg:border-0  shadow-lg lg:shadow-none  lg:flex gap-6 rounded-md`}
          >
            <MainLinks location={location} />
          </div>

          <div className=" w-44 pt-2 -ml-8  ">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dqoung1wz/image/upload/v1613318354/websiteImage/edcLogo_vupus2.png"
                alt="هيئة تطوير التعليم"
                className="w-full"
              />
            </Link>
          </div>
        </nav>
      </header>
      <div className=" container text-center lg:text-2xl text-xl mt-2">
        <h2 className="font-bold text-gray-700">هيئة تطوير التعليم</h2>
        <h2 className="text-mainblue font-bold">
          Education Development Commission
        </h2>
      </div>
    </div>
  )
}
export default Header
