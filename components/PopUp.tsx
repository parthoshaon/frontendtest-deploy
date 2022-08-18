import React,{FC} from 'react'
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
const PopUp:FC<{close:StaticImageData, rocket:StaticImageData, details:string, detailscontd:string, link:string, setPopUp:(state:boolean)=>void, popUp:boolean}> = ({close, rocket, details, detailscontd, link, setPopUp, popUp}) => {
  return (
    <div className={`${popUp ? `flex transition-[display] duration-500 ease-in` : `hidden transition-[display] duration-500 ease-out`} flex-col items-center`}>
          <div className="inset-0 bg-black/70 w-full h-full fixed z-30"></div>
          <div onBlur={() => setPopUp(false)} tabIndex={90} className="fixed z-40 bg-white lg:w-2/5 w-4/5 h-auto p-10 flex flex-col items-center rounded shadow-sm gap-8">
            <div className="float-right ml-auto cursor-pointer"
              onClick={() => setPopUp(false)}
            ><Image src={close} width="24px" height="24px" /> </div>
            <Image src={rocket} width="96px" height="96px" />
            <h1 className="text-3xl text-[#3E0563] tracking-wider font-bold">Awesome!</h1>
            <span className="text-center">
              <p>You have successfully Increased your voting power.</p>
              <p>Go and make your favorite candidate win!</p>
            </span>
            <span className="lg:p-3 p-2 bg-[#3E0563] text-white text-sm font-bold rounded lg:px-8 px-4 tracking-wider"><Link href="/voting">Return to voting page</Link></span>
          </div>
        </div>
  )
}

export default PopUp