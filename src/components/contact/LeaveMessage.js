import React from "react"
import { useContactText } from "../../constant/text"
import Title from "../shared/Title"
import Form from "./Form"
const LeaveMessage = () => {
  const { meassageText } = useContactText()
  return (
    <div>
      <Title title={meassageText} />
      <Form />
    </div>
  )
}

export default LeaveMessage
