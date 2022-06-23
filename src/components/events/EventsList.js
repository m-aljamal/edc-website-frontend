import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Event from "./Event"
const EventsList = () => {
  const { events } = useStaticQuery(graphql`
    {
      events: allSanityEvent(sort: { fields: date, order: DESC }) {
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

  return (
    <div className="container my-12">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {events.edges.map(e => (
          <div
            key={e.node.id}
            className="relative transition duration-200 ease-out hover:scale-110"
          >
            <Event data={e} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventsList
