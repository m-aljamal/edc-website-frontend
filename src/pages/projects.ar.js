import React from "react"
import Layout from "../components/shared/Layout"
import ProjectsPage from "../components/projects"
import SEO from "../components/shared/seo"
const Projects = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="المشاريع" />
      <ProjectsPage />
    </Layout>
  )
}

export default Projects
