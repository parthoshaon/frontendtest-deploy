import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Navbar } from '../components';
import { rocket, close } from "../public";
import Image from "next/image";
const voting = () => {
  const [state, setState] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const parser = (arg:string):string =>{
    var string  = arg?.replace(' ','-');
    return arg?.indexOf(' ') > -1 ? parser(string) : string?.toLowerCase();
  }
  useEffect(() => {
    return window.localStorage.getItem('name') ? setState(true) : setState(false);
  }, [])
  

  return (
    <>
      <Navbar loggedIn={state} />
      <div className={`${popUp ? `flex transition-[display] duration-500 ease-in` : `hidden transition-[display] duration-500 ease-out`} flex-col items-center`}>
          <div className="inset-0 bg-black/70 w-full h-full fixed z-30"></div>
        <div onBlur={() => setPopUp(false)} tabIndex={90}  className="fixed z-40 bg-white lg:w-2/5 w-4/5 h-auto p-10 flex flex-col items-center rounded shadow-sm gap-8">
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
      
    <div className="bg-[#1F0231] w-full h-fit flex items-center p-12">
      <div className="bg-white m-auto flex flex-col text-center p-10 gap-2 w-11/12 rounded">
          <h1 className="text-center lg:text-3xl text-xl font-medium text-[#0c0114]">Increase Your Voting Power</h1>
          <p className="text-center lg:text-xl text-lg font-medium text-[#808080]">Cheer Your Favorite Nominee to Success</p>
          <div className="flex items-end gap-6 w-full mt-8 flex-col lg:flex-row">
            <div className="flex flex-col gap-4 bg-[#1F0332] text-white items-center text-center w-full lg:p-12 rounded p-6">
                <span className="flex flex-col text-center"><h1 className="lg:text-5xl text-3xl font-bold">20</h1><p className="lg:text-lg text-base">Votes</p></span>
                <span className="flex flex-col text-center gap-6">
                    <h1 className="lg:text-5xl text-3xl font-medium">$2.50</h1>
                    <span  className="hover:text-white mx-auto bg-white px-6 py-4 rounded hover:bg-[#0c0114] text-[#0c0114] cursor-pointer transition-all duration-500 w-fit ease-in font-bold" onClick={()=> setPopUp(!popUp)}>Buy</span>
                </span>
            </div>
            <div className="flex flex-col gap-16 bg-[#1F0332] text-white items-center text-center w-full lg:p-12 rounded p-6">
                <span className="flex flex-col text-center"><h1 className="lg:text-5xl text-3xl font-bold">45</h1><p className="lg:text-lg text-base">Votes</p></span>
                <span className="flex flex-col text-center gap-6">
                    <h1 className="lg:text-5xl text-3xl font-medium">$5</h1>
                    <span  className="hover:text-white mx-auto bg-white px-6 py-4 rounded hover:bg-[#0c0114] text-[#0c0114] cursor-pointer transition-all duration-500 w-fit ease-in font-bold" onClick={()=> setPopUp(!popUp)}>Buy</span>
                </span>
            </div>
            <div className="flex flex-col gap-24 bg-[#1F0332] text-white items-center text-center w-full lg:p-12 rounded p-6">
                <span className="flex flex-col text-center"><h1 className="lg:text-5xl text-3xl font-bold">70</h1><p className="lg:text-lg text-base">Votes</p></span>
                <span className="flex flex-col text-center gap-6">
                    <h1 className="lg:text-5xl text-3xl font-medium">$7.50</h1>
                    <span  className="hover:text-white mx-auto bg-white px-6 py-4 rounded hover:bg-[#0c0114] text-[#0c0114] cursor-pointer transition-all duration-500 w-fit ease-in font-bold" onClick={()=> setPopUp(!popUp)}>Buy</span>
                </span>
            </div>
            <div className="flex flex-col gap-36 bg-[#1F0332] text-white items-center text-center w-full lg:p-12 rounded p-6">
                <span className="flex flex-col text-center"><h1 className="lg:text-5xl text-3xl font-bold">100</h1><p className="lg:text-lg text-base">Votes</p></span>
                <span className="flex flex-col text-center gap-6">
                    <h1 className="lg:text-5xl text-3xl font-medium">$10</h1>
                    <span  className="hover:text-white mx-auto bg-white px-6 py-4 rounded hover:bg-[#0c0114] text-[#0c0114] cursor-pointer transition-all duration-500 w-fit ease-in font-bold" onClick={()=> setPopUp(!popUp)}>Buy</span>
                </span>
            </div>
            
          </div>
          </div>
        
    </div>
    </>
  )
}

export default voting;