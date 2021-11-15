import React from "react"
import MoreInfo from "../../Components/CityInformation/MoreInfo"
import { useFetchData } from "../../Hooks/useFetchData"
import { useParams } from "react-router"
import { Redirect } from "react-router"
import Loader from "../../Components/Custom/Loader/Loader"
const CityInformation = () => {
  const { city } = useParams()
  const { data, loader, error } = useFetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  )

  return (
    <div>
      {data ? (
        <MoreInfo
          name={data.name}
          temp={data.main.temp}
          iconid={data.weather[0].id}
          iconTxt={data.weather[0].description}
          iconDN={data.weather[0].icon}
          feelsLike={data.main.feels_like}
          humidity={data.main.humidity}
          pressure={data.main.pressure}
          max={data.main.temp_max}
          min={data.main.temp_min}
          visibility={data.visibility}
          country={data.sys.country}
          wind={data.wind.speed}
          clouds={data.clouds.all}
        />
      ) : null}
      {loader && <Loader />}
      {error === 404 ? (
        <Redirect to="/404"></Redirect>
      ) : error === 400 ? (
        <Redirect to="/400"></Redirect>
      ) : null}
    </div>
  )
}

export default CityInformation
