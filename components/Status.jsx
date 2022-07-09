import Image from "next/image";
import React from 'react';
import { rocket , thumbs  } from "../public/"
const Status = ({icon, text, details}) => {
    return (
      <div className="flex items-center flex-col">
          <div className="inset-0 bg-black/70 w-full h-full fixed z-30"></div>
            <div className="fixed z-40 bg-white w-2/5 h-auto p-10 flex flex-col items-center">
                
          <Image src={thumbs} width="96px" height="96px" />
          <h1 className="text-3xl text-[#1F0231] font-bold">Awesome</h1>
        </div>
        </div>
  )
}

export default Status;