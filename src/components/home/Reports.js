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
    // <div className="container py-20">
    //   <Title title={reportTitle} />
    //   <div className="flex  gap-5 mt-5  ">
    //     {reports.nodes.map(({ cover, id, pdf_url }) => (
    //       <a
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         href={pdf_url}
    //         key={id}
    //         className="relative transition duration-150 ease-out hover:scale-110 lg:col-span-full  lg:w-1/3 lg:mx-auto "
    //       >
    //         <Img
    //           fluid={cover.asset.fluid}
    //           alt={reportTitle}
    //           className="rounded-md shadow-2xl "
    //         />

    //         <div className=" absolute bg-gray-400 z-20 top-0 bottom-0 left-0 right-0 rounded-md opacity-0 hover:opacity-75 transition  ">
    //           <div className=" flex justify-center items-center h-full ">
    //             <div className=" bg-mainblue rounded-full w-28 h-28 flex justify-center items-center ">
    //               <FiDownload className="text-white  text-6xl " />
    //             </div>
    //           </div>
    //         </div>
    //       </a>
    //     ))}
    //   </div>
    // </div>

    <div className="container py-20">
  <Title title={reportTitle} />
  <div className="flex  gap-5 mt-5">
    {reports.nodes.map(({ cover, id, pdf_url }) => (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={pdf_url}
        key={id}
        className="relative transition duration-150 ease-out hover:scale-110 flex-grow-0 flex-shrink-0 basis-[calc(33.333%-10px)]" // Ensure 3 per row
      >
        <Img
          fluid={cover.asset.fluid}
          alt={reportTitle}
          className="rounded-md shadow-2xl"
        />

        <div className="absolute bg-gray-400 z-20 top-0 bottom-0 left-0 right-0 rounded-md opacity-0 hover:opacity-75 transition">
          <div className="flex justify-center items-center h-full">
            <div className="bg-mainblue rounded-full w-28 h-28 flex justify-center items-center">
              <FiDownload className="text-white text-6xl" />
            </div>
          </div>
        </div>
      </a>
    ))}
  </div>
</div>
  )
}

export default Reports
