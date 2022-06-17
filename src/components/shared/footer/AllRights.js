import React from "react"
import { useFooterText } from "../../../constant/text"
const AllRights = () => {
  const { allRightText } = useFooterText()
  return (
    <h4 className="bg-mainblue text-white text-lg text-center py-4">
      {allRightText.text}
      {` ${new Date().getFullYear()}`} &copy;
      {allRightText.name}
    </h4>
  )
}

export default AllRights
