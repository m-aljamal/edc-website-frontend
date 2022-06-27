import React from "react"
import Layout from "../components/shared/Layout"
import IndexContent from "../components/events"
import SEO from "../components/shared/seo"
const EventsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="Events"
        description="Events and activities play a prominent role in building student's personality by developing his abilities and talents, modifying his behavior and psychological needs."
      />
      <IndexContent />
    </Layout>
  )
}

export default EventsPage
