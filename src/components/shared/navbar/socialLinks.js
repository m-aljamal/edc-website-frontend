import React from "react"
import { useSocialLinks } from "../../../constant/socialLink"
export default props => {
  const socialLinks = useSocialLinks()
  return (
    <div className={`flex gap-2  ${props.style}`}>
      {socialLinks.map(({ id, headerIcon, url }) => (
        <button key={id}>
          <a href={url} target="_blank" rel="noreferrer">
            <img
              src={headerIcon}
              alt="social link"
              className=" w-8 rounded-b-md "
            />
          </a>
        </button>
      ))}
    </div>
  )
}
