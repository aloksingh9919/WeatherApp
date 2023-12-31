import React from 'react'
import { formatTime } from '../libs/dateFormat';

const HourCard = ({temp,icon,time}) => {
  const properTime = formatTime(time);
 return(
    <div className="flex flex-col gap-[2px] items-center justify-center rounded-2xl bghour px-2 font-semibold w-[90px] ">
    <span>{properTime}</span>
    <img
      src={`http://openweathermap.org/img/wn/${icon}.png`}
      alt=""
      width={35}
      height={35}
      />
    <span>{temp}°</span>
  </div>
    
 )
}

export default HourCard