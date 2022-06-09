import React from "react"
import Layout from "../components/shared/Layout"
import GalleryIndex from "../components/gallery"
import SEO from "../components/shared/seo"
const EventsPage = ({ location }) => {
  return (
    <Layout location={location} lang="en">
      <SEO title="Gallery" lang="en" />
      <GalleryIndex />
    </Layout>
  )
}

export default EventsPage
