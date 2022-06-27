import React from "react"
import Layout from "../components/shared/Layout"
import ContactPage from "../components/contact/ContactPage"
import SEO from "../components/shared/seo"
const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="تواصل معنا"
        description="يسرّ هيئة تطوير التعليم الإجابة على استفساراتكم والاستماع لآرائكم والرد على تعليقاتكم."
      />
      <ContactPage />
    </Layout>
  )
}

export default IndexPage
