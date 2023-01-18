import React from "react"
import Title from "../shared/Title"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import { FiDownload } from "react-icons/fi"
import { useHomePageText } from "../../constant/text"
const Reports = () => {
  const { reports } = useStaticQuery(graphql`
    {
      reports: allSanityReports {
        nodes {
          id
          pdf_url
          cover {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)
  const { reportTitle } = useHomePageText()
  return (
    <div className="container py-20">
      <Title title={reportTitle} />
      
    </div>
  )
}

export default Reports
