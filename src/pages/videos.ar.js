import React from "react"
import Layout from "../components/shared/Layout"
import VideoIndex from "../components/gallery/VideoIndex"
import SEO from "../components/shared/seo"
const EventsPage = ({ location }) => {
  return (
    <Layout location={location} lang="ar">
      <SEO title="معرض الفيديو" lang="ar" />
      <VideoIndex lang="ar" />
    </Layout>
  )
}

export default EventsPage
