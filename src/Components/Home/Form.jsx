import React from "react"

const Form = ({ handleChange, handleSearchBtn }) => {
  return (
    <form
      onSubmit={(e) => handleSearchBtn(e)}
      className=" mt-5 mb-2 flex flex-row justify-center gap-2"
    >
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="City Name"
        className=" px-2 border-2 border-black-light  w-44 rounded "
      />
      <button className="x-3 px-2  bg-green-light text-white-light  rounded-md  h-8 hover:bg-green-dark">
        Search
      </button>
    </form>
  )
}

export default Form
