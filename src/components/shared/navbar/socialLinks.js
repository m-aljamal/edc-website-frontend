import React from "react"
import facebook from "../../../assist/icons/socialIcons/facebook-icon.svg"
import youtube from "../../../assist/icons/socialIcons/youtube-icon.svg"
import instgram from "../../../assist/icons/socialIcons/instagram-icon.svg"
import twitter from "../../../assist/icons/socialIcons/twitter-icon.svg"
const socialLinks = [
  {
    url: "https://www.facebook.com/edcmission",
    icon: facebook,
  },
  {
    url: "https://www.youtube.com/channel/UC8wDR05WxNOVrC-mlo_GwQQ",
    icon: youtube,
  },
  {
    url: "https://www.instagram.com/educationdevelopmentcommission/",
    icon: instgram,
  },
  {
    url: "https://twitter.com/edcmission",
    icon: twitter,
  },
]
export default props => {
  return (
    <div className={`flex gap-2  ${props.style}`}>
      {socialLinks.map((link, index) => (
        <button key={index}>
          <a href={link.url} target="_blank" rel="noreferrer">
            <img
              src={link.icon}
              alt="social link"
              className=" w-8 rounded-b-md "
            />
          </a>
        </button>
      ))}
    </div>
  )
}
