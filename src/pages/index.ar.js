import React from "react"
import Layout from "../components/shared/Layout"
import IndexContent from "../components/home"
import SEO from "../components/shared/seo"
const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title="الرئيسية"
        description="نعمل على دعم التعليم في المناطق المنكوبة وإنشاء مدارس نوعيّة لتقديم تعليم عالي الجودة، وافتتاح مراكز تعليميّة خاصّة بالأطفال الأيتام وأبناء الشهداء، تهدف إلى تأمين الرعاية التعليميّة والاجتماعيّة والصحيّة للأطفال الأيتام في المدرسة، لتحقيق التكافل والرعاية الاجتماعية، ووضعهم في بيئة صحّية سليمة، وتخفيف وطأة الحرمان وهول المصيبة لديهم بعد فقدانهم لمن كان يعولهم ويرعاهم."
      />
      <IndexContent />
    </Layout>
  )
}

export default IndexPage
