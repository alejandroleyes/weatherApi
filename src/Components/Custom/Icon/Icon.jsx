import React from "react"
import cloudy from "../../../Icons/cloudy.svg"

import fog from "../../../Icons/fog.svg"
import heavy_snow from "../../../Icons/heavy_snow.svg"
import moon_night from "../../../Icons/moon_night.svg"
import partly_cloudy from "../../../Icons/partly_cloudy.svg"
import rainy_snowy from "../../../Icons/rainy_snowy.svg"
import rainy from "../../../Icons/rainy.svg"
import rainy2 from "../../../Icons/rainy2.svg"
import rainy3 from "../../../Icons/rainy3.svg"
import snowy from "../../../Icons/snowy.svg"
import snowy2 from "../../../Icons/snowy2.svg"
import sunny from "../../../Icons/sunny.svg"
import heavy_rain from "../../../Icons/heavy_rain.svg"
import lightning from "../../../Icons/lightning.svg"
import thunder_rainy from "../../../Icons/thunder_rainy.svg"
import thunder_storm from "../../../Icons/thunder_storm.svg"

const Icon = ({ iconid, iconTxt, iconDN }) => {
  let condition = ""
  if (iconid === 200 || iconid === 230) {
    condition = thunder_rainy
  }
  if (iconid === 200 || iconid === 231) {
    condition = lightning
  }
  if (iconid === 200 || iconid === 232) {
    condition = heavy_rain
  }

  if (iconid > 209 && iconid < 222) {
    condition = thunder_storm
  }
  if (iconid === 300 || iconid === 310 || iconid === 313) {
    condition = rainy
  }
  if (iconid === 301 || iconid === 311 || iconid === 314) {
    condition = rainy2
  }
  if (iconid === 302 || iconid === 312 || iconid === 321) {
    condition = rainy3
  }

  if (iconid === 500 || iconid === 520) {
    condition = rainy
  }
  if (iconid === 501 || iconid === 521) {
    condition = rainy2
  }
  if (
    iconid === 502 ||
    iconid === 503 ||
    iconid === 504 ||
    iconid === 522 ||
    iconid === 531
  ) {
    condition = rainy3
  }
  if (iconid === 511) {
    condition = rainy_snowy
  }

  if (iconid === 600) {
    condition = snowy
  }
  if (iconid === 601) {
    condition = snowy2
  }
  if (iconid === 602) {
    condition = heavy_snow
  }

  if (iconid > 610 && iconid < 623) {
    condition = rainy_snowy
  }
  if (iconid > 700 && iconid < 782) {
    condition = fog
  }

  if (iconid === 800) {
    if (iconDN === "01d") {
      condition = sunny
    } else {
      condition = moon_night
    }
  }

  if (iconid === 801) {
    if (iconDN === "02d") {
      condition = partly_cloudy
    } else {
      condition = cloudy
    }
  }

  if (iconid > 801 && iconid < 805) {
    condition = cloudy
  }

  return (
    <div>
      <img className=" w-24 h-24" src={condition} alt={iconTxt}></img>
    </div>
  )
}

export default Icon
