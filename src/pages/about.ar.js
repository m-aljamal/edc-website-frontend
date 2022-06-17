import React from "react"
import Layout from "../components/shared/Layout"
import AboutPage from "../components/about/aboutPage"
import SEO from "../components/shared/seo"
const About = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="من نحن" />
      <AboutPage />
    </Layout>
  )
}

export default About
