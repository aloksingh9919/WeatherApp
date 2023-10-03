'use client'

import { GridLoader } from "react-spinners";
const loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bgcolorDeatils">
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
    </div>
  )
}

export default loading