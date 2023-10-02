"use client";
import Image from "next/image";
import { TbLocationSearch } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useState } from "react";
const navbar = () => {
  const [search, setsearch] = useState("");
  const router = useRouter();

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  const handleInputChange = (e) => {
    setsearch(e.target.value);
  };

  return (
    <div className="text-balck fixed">
      <div className="w-screen items-center bgnav h-[50px] ">
        <div className="flex items-center gap-[1px] px-2">
          <div className="">

          <Image
            src="/weather-app.png"
            alt="logo"
            width={35}
            height={35} 
            />
            </div>
          <span className="font-bold text-xl max-sm:text-[16px] leading-normal"> WeatherApp </span>
        </div>
        <form
          className="absolute top-2 right-10 w-[250px] h-[30px] flex items-center bglogo justify-center rounded-lg max-sm:w-[150px] max-sm:h-[25px]"
          onSubmit={handleSubmitSearch}
        >
          <input
            className="placeholder:text-black w-[180px] bg-transparent outline-none max-sm:w-[120px] "
            type="text"
            placeholder="search location"
            onChange={handleInputChange}
            value={search}
          />
          <TbLocationSearch
            size={25}
            onClick={handleSubmitSearch}
            className=" cursor-pointer max-sm:w-[20px]"
          />
        </form>
      </div>
    </div>
  );
};

export default navbar;
