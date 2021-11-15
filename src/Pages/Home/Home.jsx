import React, { useState } from "react"
import { Redirect } from "react-router"
import CityWeather from "../../Components/Home/CityWeather"
import Loader from "../../Components/Custom/Loader/Loader"

import Form from "../../Components/Home/Form"
import { useFetchData } from "../../Hooks/useFetchData"

const Home = () => {
  const [city, setCity] = useState("")
  const { data, loader, error, handleSearchBtn } = useFetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  )

  const handleChange = (e) => {
    setCity(e.target.value)
  }
  return (
    <div>
      <h1 className="mt-5    text-green-dark  text-base font-bold text-center  sm:text-xl md:text-2xl  ">
        Weather conditions in your city!
      </h1>
      <Form handleChange={handleChange} handleSearchBtn={handleSearchBtn} />
      <div className="flex flex-row justify-center">
        {data ? (
          <CityWeather
            name={data.name}
            temp={data.main.temp}
            iconid={data.weather[0].id}
            iconTxt={data.weather[0].description}
            iconDN={data.weather[0].icon}
            city={city}
          />
        ) : null}

        {loader && <Loader />}
        {error === 404 ? (
          <Redirect to="/404"></Redirect>
        ) : error === 400 ? (
          <Redirect to="/400"></Redirect>
        ) : null}
      </div>
    </div>
  )
}

export default Home
