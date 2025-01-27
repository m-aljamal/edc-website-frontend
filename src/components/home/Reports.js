// import React from "react"
// import Title from "../shared/Title"
// import Img from "gatsby-image"
// import { useStaticQuery } from "gatsby"
// import { FiDownload } from "react-icons/fi"
// import { useHomePageText } from "../../constant/text"
// const Reports = () => {
//   const { reports } = useStaticQuery(graphql`
//     {
//       reports: allSanityReports {
//         nodes {
//           id
//           pdf_url
//           cover {
//             asset {
//               fluid(maxWidth: 1000) {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   const { reportTitle } = useHomePageText()
//   return (
//     <div className="container py-20">
//       <Title title={reportTitle} />
//       <div className="flex flex-wrap  gap-5 mt-5  ">
//         {reports.nodes.map(({ cover, id, pdf_url }) => (
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             href={pdf_url}
//             key={id}
//             className="relative transition duration-150 ease-out hover:scale-110 lg:col-span-full  lg:w-1/3 lg:mx-auto "
//           >
//             <Img
//               fluid={cover.asset.fluid}
//               alt={reportTitle}
//               className="rounded-md shadow-2xl "
//             />

//             <div className=" absolute bg-gray-400 z-20 top-0 bottom-0 left-0 right-0 rounded-md opacity-0 hover:opacity-75 transition  ">
//               <div className=" flex justify-center items-center h-full ">
//                 <div className=" bg-mainblue rounded-full w-28 h-28 flex justify-center items-center ">
//                   <FiDownload className="text-white  text-6xl " />
//                 </div>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Reports






import React from "react"
import Title from "../shared/Title"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
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
              fluid(maxWidth: 600) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)
  const { reportTitle } = useHomePageText()

  const sortedReports = React.useMemo(() => {
    const order = [
      "1ohrJEk5bJReBwM5rqkYR20YEjMqWo5-3",
      "1xf_eH60hY8lvynNEjqZ8jkxar70D2Emv",
      "1sPj9s5Q-TbMN6V0nuOpyshucXmJ1Z4rR",
      "1R7I7UBICb2yG-OQNNI9Utrs_yrASfbKP",
    ]
    return reports.nodes.sort((a, b) => {
      const aIndex = order.findIndex((id) => a.pdf_url.includes(id))
      const bIndex = order.findIndex((id) => b.pdf_url.includes(id))
      return aIndex - bIndex
    })
  }, [reports.nodes])

  return (
    <div className="container py-20">
      <Title title={reportTitle} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {sortedReports.map(({ cover, id, pdf_url }) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={pdf_url}
            key={id}
            className="relative transition duration-150 ease-out hover:scale-105 block"
          >
            <Img
              fluid={cover.asset.fluid}
              alt={reportTitle}
              className="rounded-md shadow-md w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gray-400 rounded-md opacity-0 hover:opacity-75 transition flex items-center justify-center">
              <div className="bg-mainblue rounded-full w-16 h-16 flex items-center justify-center">
                <FiDownload className="text-white text-3xl" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Reports


