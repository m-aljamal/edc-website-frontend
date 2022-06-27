import React from "react"
import Layout from "../components/shared/Layout"
import IndexContent from "../components/events"
import SEO from "../components/shared/seo"
const EventsPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="الفعاليات"
        description="تلعب الفعاليّات والأنشطة دوراً بارزاً في بناء شخصيّة الطالب من خلال تنمية قدراته ومواهبه وتعديل سلوكه واحتياجاته النفسيّة."
      />
      <IndexContent />
    </Layout>
  )
}

export default EventsPage
