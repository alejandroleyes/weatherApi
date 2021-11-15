import React from "react"
import Icon from "../Custom/Icon/Icon"
import { Link } from "react-router-dom"

const MoreInfo = ({
  name,
  temp,
  iconid,
  iconTxt,
  iconDN,
  feelsLike,
  humidity,
  pressure,
  max,
  min,
  visibility,
  country,
  wind,
  clouds,
}) => {
  return (
    <div className=" flex flex-col  items-center  bg-gradient-to-b from-green-dark to-blue-light min-h-screen ">
      <h1 className="pt-7 mb-4 text-3xl text-center">
        {name} - {country}
      </h1>

      <Icon iconid={iconid} iconDN={iconDN} />

      <h3 className="text-white-light capitalize text-lg">{iconTxt}</h3>

      <div className="mt-7 grid grid-cols-2 gap-6 text-lg  sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5  ">
        <h3>
          Temp: <span className="text-white-light ">{temp.toFixed(1)} ºC</span>
        </h3>
        <h3>
          Feels Like:{" "}
          <span className="text-white-light">{feelsLike.toFixed(1)} ºC</span>
        </h3>

        <h3>
          Temp max: <span className="text-white-light">{max.toFixed(1)}ºC</span>
        </h3>
        <h3>
          Temp min:
          <span className="text-white-light"> {min.toFixed(1)} ºC</span>
        </h3>
        <h3>
          Humidity: <span className="text-white-light">{humidity} %</span>
        </h3>
        <h3>
          Pressure: <span className="text-white-light">{pressure} mb</span>
        </h3>
        <h3>
          Visibility:
          <span className="text-white-light"> {visibility / 1000} Km</span>
        </h3>
        <h3>
          Wind:
          <span className="text-white-light"> {wind.toFixed(2)} m/s</span>
        </h3>
        <h3>
          Clouds:
          <span className="text-white-light"> {clouds} %</span>
        </h3>
      </div>

      <Link to="/">
        <p className=" mt-10 pt px-8 bg-green-light  text-white-light hover:bg-green-dark  hover:text-white-light  rounded-lg h-8  font-medium text-lg sm:mt-20">
          Back
        </p>
      </Link>
    </div>
  )
}

export default MoreInfo
