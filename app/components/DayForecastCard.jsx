import React from 'react'
import { formatDayOnly } from "../libs/dateFormat";
import Allforecast from "../components/Allforecast";
import {BiSortDown} from 'react-icons/bi';
import { useState } from "react";

const DayForecastCard = ({date}) => {
const[show,setshow]=useState(false)
const showforecast = ()=>{
  setshow(!show)
}
  console.log(date[0].dt)
  const dayName = formatDayOnly(date[0].dt_txt.split(" ")[0]);
  const iconUrl = `http://openweathermap.org/img/wn/${date[0].weather[0].icon}.png`;
  const maxTemp = Math.round(date[0].main.temp_max);
  const minTemp = Math.round(date[0].main.temp_min);
  return (
    <div>
    <div className="flex shadow-md p-1 items-center justify-around w-[69vw] h-[60px] bgtop rounded-lg m-auto max-md:w-[98vw]">
    <span className="text-[20px] font-semibold">{dayName}</span>
    <img src={iconUrl} alt="Logo" width={30} height={30} />
    <div>
      <span className="text-[20px] font-semibold">{maxTemp}°</span> /{" "}
      <span className="text-[20px] font-semibold">{minTemp}°</span>
    </div>
    <div onClick={showforecast} className=" cursor-pointer flex gap-1 hover:bg-zinc-800 px-1 rounded-lg">
      <BiSortDown size={30}/>
      <span className=' font-semibold text-md '>All Day</span>
    </div>
  </div>
   { show && (<div className="  max-md:grid grid-cols-4 max-md:gap-2 mt-4  gap-5 flex justify-center items-center">
    {date.map((item)=>(
    <Allforecast 
    time={item.dt_txt}
    temp={item.main.temp}
    icon={item.weather[0].icon}
     />
  ))}
    </div>)}
    </div>
  )
}


export default DayForecastCard