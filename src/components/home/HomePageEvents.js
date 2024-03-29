import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Event from "../events/Event"
import Title from "../shared/Title"
import { useHomePageText } from "../../constant/text"

const EventsList = () => {
  const { events } = useStaticQuery(graphql`
    {
      events: allSanityEvent(sort: { fields: date, order: DESC }, limit: 2) {
        edges {
          node {
            mainImage {
              asset {
                fluid(maxWidth: 4000) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            date
            slug {
              current
            }
            title {
              ar
              en
            }
            shortDescription {
              ar
              en
            }
            location {
              ar
              en
            }
            id
          }
        }
      }
    }
  `)
  const { eventTitle } = useHomePageText()
  return (
    <div className="container md-font mt-10">
      <Title title={eventTitle} />
      <div className="lg:flex gap-8">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:w-3/4">
          {events.edges.map(
            (e, i) =>
              i < 3 && (
                <div
                  key={e.node.id}
                  className="relative transition duration-150 ease-out hover:scale-110"
                >
                  <Event data={e} homePage />
                </div>
              )
          )}
        </div>

        <div className="lg:w-1/4 h-[500px] lg:h-auto mt-10 lg:mt-0 lg:mx-8  ">
          <a
            className="twitter-timeline"
            data-width="100%"
            data-height="500px"
            href="https://twitter.com/edcmission?ref_src=twsrc%5Etfw"
          >
            Tweets by edcmission
          </a>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      </div>
    </div>
  )
}

export default EventsList
