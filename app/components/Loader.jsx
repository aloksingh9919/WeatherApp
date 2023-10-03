"use client";

import { useRouter } from "next/navigation";
import { GridLoader } from "react-spinners";

const Loader = () => {
  
  const router = useRouter();
  return (
    <div className=" flex flex-col gap-3 justify-center items-center h-screen w-full bgcolorDeatils">
     <GridLoader
  height="80"
  width="80"
  color="#282827"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    <button  className="text-black p-2 bg-opacity-80 rounded-full bg-neutral-600 " onClick={()=>router.push
    ('/')}>Refresh...</button>
    </div>
  );
};

export default Loader;
