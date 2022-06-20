import React from "react"
import Layout from "../components/shared/Layout"
import VideoIndex from "../components/gallery/VideoIndex"
import SEO from "../components/shared/seo"
const EventsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="معرض الفيديو" />
      <VideoIndex />
    </Layout>
  )
}

export default EventsPage
