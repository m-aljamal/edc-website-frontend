import React from "react"
import { useSocialLinks } from "../../../constant/socialLink"

const FooterSocialLinks = () => {
  const socialLinks = useSocialLinks()
  return (
    <div className="flex gap-5 justify-center">
      {socialLinks.map(({ url, footerIcon, id }) => (
        <a href={url} target="_blank" rel="noreferrer" key={id}>
          {footerIcon}
        </a>
      ))}
    </div>
  )
}

export default FooterSocialLinks
