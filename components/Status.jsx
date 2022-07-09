import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { close, rocket , thumbs  } from "../public/"
const Status = ({icon, text, details, setState, href, link}) => {
    return (
      <div className="flex items-center flex-col">
          <div className="inset-0 bg-black/70 w-full h-full fixed z-30"></div>
            <div className="fixed z-40 bg-white w-2/5 h-auto p-10 flex flex-col items-center rounded shadow-sm gap-8">
                <div className="float-right ml-auto cursor-pointer"
                    //onClick={setState((state) => !state)}
                    tabIndex={9}
                    //onBlur={setState(false)}
                ><Image src={close} width="24px" height="24px" /> </div>
          <Image src={icon ? icon : thumbs} width="96px" height="96px" />
                <h1 className="text-3xl text-[#3E0563] tracking-wider font-bold">Awesome!</h1>
                <span className="text-center">
                    <p>Thanks for taking your time to vote</p>
                    <p>We are committed to promoting technology in Africa</p>
                </span>
                <span className="p-3 bg-[#3E0563] text-white font-bold rounded px-8 tracking-wider"><Link href={href ? href : "/"}>{link ? link : "Return to voting page"}</Link></span>
        </div>
        </div>
  )
}

export default Status;