import React from "react"
import Layout from "../components/shared/Layout"
import { graphql } from "gatsby"
import ProjectPage from "../components/project"
import SEO from "../components/shared/seo"
const Project = ({ location, data: { project }, pageContext }) => {
  const { lang } = pageContext

  return (
    <Layout location={location}>
      <SEO title={project.title[lang]} />
      <ProjectPage data={project} />
    </Layout>
  )
}

export default Project

export const query = graphql`
  query($slug: String!) {
    project: sanityProjects(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      _rawMaingoal
      _rawProjectDescription1
      _rawProjectDescription2
      _rawProjectIntro
      _rawProjectGoals
      title {
        ar
        en
      }
      video
      projectName {
        ar
        en
      }
      videoPoster

      projectGoals {
        _key
        ar
        en
      }
      shortDescription {
        ar
        en
      }
      id
      image {
        _key
        asset {
          fluid(maxWidth: 4000) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
