import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Background from "../shared/Background"
import Slider from "react-slick"
import { useHomePageText } from "../../constant/text"
import { useLang } from "../../context/lang-context"

const Story = ({ story, image, title }) => {
  const [lang] = useLang()
  const { background } = useStaticQuery(graphql`
    {
      background: sanityBanners(title: { eq: "seccessBackground" }) {
        image {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)
  return (
    <div className="relative ">
      
    </div>
  )
}

const SuccessStory = () => {
  const settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    cssEase: "linear",
    slidesToScroll: 1,
    rtl: false,
    arrows: false,
  }

  const { stories } = useHomePageText()

  return (
    <section className="relative">
      <Slider {...settings}>
        <Story
          story={stories.muhammad}
          image="https://res.cloudinary.com/dqoung1wz/image/upload/v1631099683/websiteImage/s1_spmn3i.png"
          title={stories.title}
        />
        <Story
          story={stories.busher}
          image="https://res.cloudinary.com/dqoung1wz/image/upload/v1631099992/websiteImage/ezgif_1_qxp7uv.png"
          title={stories.title}
        />
        <Story
          story={stories.haj}
          image="https://res.cloudinary.com/dqoung1wz/image/upload/v1631099683/websiteImage/s3_tzihw7.png"
          title={stories.title}
        />
      </Slider>
    </section>
  )
}

export default SuccessStory
