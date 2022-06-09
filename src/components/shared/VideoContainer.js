import React from "react"
import poster from "../../assist/images/poster.webp"
const VideoContainer = ({ src, videoPoster, ...props }) => {
  return (
    <video
      controls
      poster={videoPoster || poster}
      className={`rounded-lg w-full ${props.style}  `}
    >
      <source src={src} type="video/mp4" />
      <track
        src="captions_en.vtt"
        kind="captions"
        srcLang="en"
        label="english_captions"
      ></track>
    </video>
  )
}
export default VideoContainer
