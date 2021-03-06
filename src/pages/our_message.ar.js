import React from "react"
import Layout from "../components/shared/Layout"
import SEO from "../components/shared/seo"
import OurMessage from "../components/about/OurMessage"

const our_message = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="رسالتنا" />
      <OurMessage />
    </Layout>
  )
}

export default our_message
