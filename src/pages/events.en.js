import React from "react"
import Layout from "../components/shared/Layout"
import IndexContent from "../components/events"
import SEO from "../components/shared/seo"
const EventsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Events" />
      <IndexContent />
    </Layout>
  )
}

export default EventsPage
