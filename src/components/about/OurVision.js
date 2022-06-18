import React from "react"
import Img from "gatsby-image"
import { useLang } from "../../context/lang-context"
import { useAboutText } from "../../constant/text"

const OurVision = () => {
  const [lang] = useLang()
  const { ourVisionText } = useAboutText()
  return (
    <div className="container my-8">
      <div>
        <h2 className="text-mainblue text-2xl font-semibold text-center">
          {lang === "ar" ? "رؤيتنا" : "Our Vision"}
        </h2>
        <div>
          {ourVisionText.map(item => (
            <div
              key={item.id}
              className={`md:flex   gap-5 my-20  ${
                item.id % 2 === 0 ? "flex-row-reverse" : ""
              }  `}
            >
              <Img fluid={item.img} className=" md:w-1/2 rounded-md" />
              <p className=" md:w-2/3 text-xl text-gray-700 text-justify leading-10 ">
                {item.text[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurVision
