import React from "react"
import facebook from "../assist/icons/socialIcons/facebook-icon.svg"
import youtube from "../assist/icons/socialIcons/youtube-icon.svg"
import instgram from "../assist/icons/socialIcons/instagram-icon.svg"
import twitter from "../assist/icons/socialIcons/twitter-icon.svg"
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa"
const socialLinksObject = {
  facebook: {
    url: "https://www.facebook.com/edcmission",
    headerIcon: facebook,
    footerIcon: (
      <FaFacebookF className="text-2xl hover:text-blue-600 text-blue-500 " />
    ),
    id: 1,
  },
  youtube: {
    url: "https://www.youtube.com/channel/UC8wDR05WxNOVrC-mlo_GwQQ",
    headerIcon: youtube,
    footerIcon: (
      <FaYoutube className="text-2xl hover:text-red-600 text-red-500 " />
    ),
    id: 2,
  },
  instagram: {
    url: "https://www.instagram.com/educationdevelopmentcommission/",
    headerIcon: instgram,
    footerIcon: (
      <FaInstagram className="text-2xl hover:text-pink-600 text-pink-500 " />
    ),
    id: 3,
  },
  twitter: {
    url: "https://twitter.com/edcmission",
    headerIcon: twitter,
    footerIcon: (
      <FaTwitter className="text-2xl hover:text-blue-600 text-blue-500 " />
    ),
    id: 4,
  },
}
export const useSocialLinks = () => {
  return Object.keys(socialLinksObject).map(key => socialLinksObject[key])
}
