import React from "react"
import Layout from "../components/shared/Layout"
import GalleryIndex from "../components/gallery"
import SEO from "../components/shared/seo"
const EventsPage = ({ location }) => {
  return (
    <Layout location={location} lang="ar">
      <SEO title="معرض الصور" lang="ar" />
      <GalleryIndex />
    </Layout>
  )
}

export default EventsPage
