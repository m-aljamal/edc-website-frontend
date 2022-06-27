import React from "react"
import ProjectsPage from "../components/projects"
import Layout from "../components/shared/Layout"
import SEO from "../components/shared/seo"
const ProjectEnglish = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="Projects"
        description="Education Development Commission cooperates with local and international organizations and societies in working on educational projects."
      />
      <ProjectsPage />
    </Layout>
  )
}

export default ProjectEnglish
