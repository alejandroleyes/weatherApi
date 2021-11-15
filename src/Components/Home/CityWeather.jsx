import React from "react"
import Icon from "../Custom/Icon/Icon"
import { Link } from "react-router-dom"

const CityWeather = ({ name, temp, iconid, iconTxt, iconDN }) => {
  return (
    <div className="  mt-6 p-3 bg-gradient-to-b from-green-dark to-blue-light   w-64 h-96 rounded-lg  flex flex-col items-center  shadow-2xl transform transition duration-100 hover:scale-105">
      <h1 className=" mt-4  text-2xl">{name}</h1>
      <div className="flex flex-row mt-4 mb-3  text-white-light ">
        <h2 className=" ml-5 text-7xl ">{temp.toFixed(1)}</h2>
        <span className=" mt-2 text-lg align-top ">ºC</span>
      </div>

      <Icon iconid={iconid} iconTxt={iconTxt} iconDN={iconDN} />
      <h3 className="text-white-light capitalize text-lg">{iconTxt}</h3>
      <Link to={`/cityinformation/${name}`}>
        <button className=" mt-6  px-4 bg-green-lightx2  text-green-dark2 hover:bg-green-light  hover:text-white-light  rounded-lg h-8 max-w-full text-center">
          See More
        </button>
      </Link>
    </div>
  )
}

export default CityWeather
