import React from "react"
import Layout from "../components/shared/Layout"
import ContactPage from "../components/contact/ContactPage"
import SEO from "../components/shared/seo"
const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Contact us" />
      <ContactPage />
    </Layout>
  )
}

export default IndexPage
