"use client";
import { useEffect, useState, useMemo } from "react";
import HourCard from "./HourCard";
import Loader from "./Loader";
import Topcard from "./Topcard";
import axios from "axios";
import DayForecastCard from "./DayForecastCard";
import { filterForecast } from "../libs/dateFormat";
const DeatilsSide = ({ params }) => {

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY 
  const [details, setDetails] = useState({});
  const [foreCast, setForecast] = useState([]);
  const [hourlyForecast, sethourlyForecast] = useState([]);

  const useCity = (params) => {
    const city = useMemo(() => {
      if (params) {
        return params;
      } else {
        return "jaipur";
      }
    }, [params]);

    return city;
  };
  const city = useCity(params);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather/?q=${city}&units=metric&APPID=${API_KEY}`
      )
      .then((res) => {
        setDetails(res.data);
      });

    // forecast days
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&APPID=${API_KEY}`
      )
      .then((res) => {
        const forecast = filterForecast(res.data.list);
        setForecast(forecast);
        const hourforecast = forecast[Object.keys(forecast)[1]];
        sethourlyForecast(hourforecast);
      });
  }, [city]);

  if (!details.main) {
    return (
        
       <Loader/>
    );
  }
  return (
    <div className=" bgcolorDeatils pb-[30px]">
      <div className="text-white flex flex-col w-screen items-center justify-center">
        {/* top */}
        <Topcard
          name={details.name}
          country={details.sys.country}
          icon={details.weather[0].icon}
          temp={details.main.temp}
          description={details.weather[0].description}
          main={details.weather[0].main}
          pressure={details.main.pressure}
          humidity={details.main.humidity}
        />
        {/* mid  */}
        <div className=" max-md:grid grid-cols-4 max-md:gap-2 mt-4  gap-5 flex">
          {hourlyForecast.map((hourData, index) => (
            <HourCard
              key={index}
              temp={hourData.main.temp}
              icon={hourData.weather[0].icon}
              time={hourData.dt_txt}
            />
          ))}
        </div>
        {/* bottom */}
        <div className="flex flex-col gap-3 justify-center items-center mt-6">
          {Object.keys(foreCast).map((data) => (
            <DayForecastCard key={data} date={foreCast[data]} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default DeatilsSide;
