import React from "react"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="h-16  bg-green-dark2 px-8 flex items-center">
      <Link to="/">
        <h1 className=" text-2xl font-bold  text-white-light">Weather API</h1>{" "}
      </Link>
    </div>
  )
}

export default Header
