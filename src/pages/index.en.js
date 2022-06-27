import React from "react"
import Layout from "../components/shared/Layout"
import IndexContent from "../components/home"
import SEO from "../components/shared/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="Home"
        description="We are working to support education in the affected areas and establish quality schools to provide high-quality education, and to open education centers for orphaned children and the children of martyrs, aimed at providing educational, social and health care for orphaned children in school in order to achieve solidarity and social care, and put them in a healthy and sound environment, and alleviate the burden of deprivation and the terrible calamity they have after losing those who used to support and care for them."
      />
      <IndexContent />
    </Layout>
  )
}

export default IndexPage
