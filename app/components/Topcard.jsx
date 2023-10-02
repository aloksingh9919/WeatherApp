import React from 'react'
import {formatDate} from "../libs/dateFormat"

const Topcard = ({icon, country,name,temp,main,description,humidity,pressure}) => {
const date = formatDate(Date.now()/1000)
  return (
    <div className="flex flex-col items-center">
        <span className="text-[30px] font-bold">{name} , {country}</span>
        <h3 className="text-md mt-1 text-[900]">{date}</h3>
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt="loading"
          className="w-[80px] h-[80px]"
        />
        <h1 className="text-[40px] font-bold"> {temp}°</h1>
        <div className='flex gap-2'>
        <div className="rounded-2xl bgtop w-fit font-semibold">
          <span className="mx-2">humidity:{humidity}</span>
        </div>

        <div className="rounded-2xl bgtop w-fit font-semibold">
          <span className="mx-2">{main} ,</span>
          <span className="mx-2">{description}</span>
        </div>
        <div className="rounded-2xl bgtop w-fit font-semibold">
          <span className="mx-2"> Pressure:{pressure}</span>
        </div>
        </div>
      </div>
  )
}

export default Topcard