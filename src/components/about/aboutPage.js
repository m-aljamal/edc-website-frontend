import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AboutVideo from "./AboutVideo"
import HeroBackground from "../shared/HeroBackground"
import PartnersSection from "../home/PartnersSection"
import Achivments from "../projects/Achivments"
import AboutUsSlider from "./AboutUsSlider"
import { useLang } from "../../context/lang-context"
import { useAboutText } from "../../constant/text"

const AboutPage = () => {
  const { hero, slides } = useStaticQuery(graphql`
    {
      hero: sanityOtherHeroImgs(title: { eq: "about" }) {
        image {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      slides: sanityImagesSlide(title: { eq: "aboutSlides" }) {
        id
        aboutPageSlide {
          _key
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

  const [lang] = useLang()

  const { slogan } = useAboutText()

  return (
    <div>
      <HeroBackground image={hero.image.asset.fluid} className=" relative">
        <div className=" bg-mainblue opacity-30 absolute top-0 bottom-0 right-0 left-0"></div>
        <div className="flex absolute container top-0 bottom-0 items-center ">
          <div className="py-4 text-white font-bold container text-3xl ">
            <h3>{slogan.text1}</h3>
            <h3 className={`${lang === "ar" ? "mr-8" : "ml-8"}   py-8`}>
              {slogan.text2}
            </h3>
            <h3 className={`${lang === "ar" ? "mr-16" : "ml-16"}`}>
              {slogan.text3}
            </h3>
          </div>
        </div>
      </HeroBackground>

      <AboutVideo />

      <AboutUsSlider slides={slides} />

      <Achivments />
      <PartnersSection partnerBody />
    </div>
  )
}

export default AboutPage
