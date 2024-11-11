import React from "react"
import { useLang } from "../../context/lang-context"
const Hero = () => {
  const [lang] = useLang()
  const arabicUrl =
    "https://res.cloudinary.com/mohammadjamal/video/upload/v1731309177/wpk8qperu0x0esycrjnc.mp4"
  const englishUrl =
    "https://res.cloudinary.com/dqoung1wz/video/upload/v1634197021/Video/homeVideo-english_n3c4vd.mp4"
  return (
    <div className="mt-4 container">
      <a
        href="https://www.youtube.com/watch?v=Y3vcSdsXDEo"
        target="_blank"
        rel="noreferrer"
      >
        <video
          loop
          muted
          autoPlay
          className="object-contain md:object-fill w-full lg:h-[600px]"
        >
          <source
            src={lang === "ar" ? arabicUrl : englishUrl}
            type="video/mp4"
          ></source>
        </video>
      </a>
    </div>
  )
}
export default Hero
