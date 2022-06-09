import React from "react"
import Layout from "../components/shared/Layout"
import ImageIndex from "../components/gallery/ImageIndex"
import SEO from "../components/shared/seo"
const EventsPage = ({ location }) => {
  return (
    <Layout location={location} lang="ar">
      <SEO title="معرض الصور" lang="ar" />
      <ImageIndex />
    </Layout>
  )
}

export default EventsPage
