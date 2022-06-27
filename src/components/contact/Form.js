import React from "react"
import { useContactText } from "../../constant/text"
import { useForm, ValidationError } from "@formspree/react"
const style =
  "border-2 rounded-md border-gray-300 focus:outline-none focus:ring w-full my-3 p-4"
const Form = () => {
  const { messageForm, messageResponse } = useContactText()
  const [state, handleSubmit] = useForm(process.env.GATSBY_SANITY_formSpree)
  if (state.succeeded) {
    return (
      <div className="text-center text-xl md:text-3xl pt-8 text-gray-700 ">
        <p>{messageResponse}</p>
      </div>
    )
  }
  return (
    <form onSubmit={handleSubmit} className="container mt-8">
      <div className="grid md:grid-cols-3 gap-5">
        <div>
          <Input
            type="email"
            name="email"
            placeholder={messageForm.emailText}
          />
        </div>
        <div>
          <Input type="text" name="name" placeholder={messageForm.name} />
        </div>
        <div>
          <Input
            type="text"
            name="phoneNumber"
            placeholder={messageForm.phone}
          />
        </div>
      </div>
      <div>
        <textarea
          placeholder={messageForm.text}
          name="messageBody"
          className={style}
        />
      </div>
      <div className="button">
        <button
          disabled={state.submitting}
          className="border bg-mainblue text-white px-4 py-2 rounded-md"
        >
          {messageForm.buttonText}
        </button>
      </div>
    </form>
  )
}

const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={style}
    />
  )
}
export default Form
