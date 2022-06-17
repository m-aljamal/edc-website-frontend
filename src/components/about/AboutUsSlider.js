import React from "react"
import Img from "gatsby-image"
import ImageSlider from "../shared/ImageSlider"
import { Link } from "gatsby"
import { useLang } from "../../context/lang-context"
import { useAboutText } from "../../constant/text"

export default function AboutUsSlider({ slides }) {
  const [lang] = useLang()
  const { buttonsLinks } = useAboutText()

  return (
    <div className="mt-12">
      <div className="flex flex-col-reverse md:flex-row  items-center">
        <div className="md:w-1/4 w-full container  ">
          {buttonsLinks.map(button => (
            <Link
              to={lang === "ar" ? button.link : "/" + lang + button.link}
              className="w-full my-4 py-2 rounded-md outline-none bg-mainblue text-white flex justify-center"
            >
              {button[lang]}
            </Link>
          ))}
        </div>
        <div className="md:w-3/4  w-full ">
          <ImageSlider
            width="100%"
            noArrow
            options={{
              autoplay: true,
              autoplaySpeed: 5000,
              cssEase: "linear",
            }}
          >
            {slides.aboutPageSlide.map(i => (
              <Img fluid={i.asset.fluid} className="rounded-lg" key={i._key} />
            ))}
          </ImageSlider>
        </div>
      </div>
    </div>
  )
}
