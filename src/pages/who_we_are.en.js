import React from "react"
import Layout from "../components/shared/Layout"
import SEO from "../components/shared/seo"
import WhoWeArePage from "../components/about/WhoWeArePage"
const About = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Who we are" />
      <WhoWeArePage />
    </Layout>
  )
}

export default About
