import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Navbar } from '../components';
const data = ["Exceptional Data Analyst", "Promising Data Analyst","Exceptional Data Scientist","Promising Data Scientist","Exceptional Visual Designer","Promising Visual Desiner","Exceptional Devops Expert","Exceptional Data Analyst","Exceptional Data Analyst","Promising Data Analst", "Exceptional Data Scientist","Promising Data Scientist","Exceptional Visual Designer","Promising Visual Designer","Exceptional DevOps Expert","Exceptional Data Analyst"]
const voting = () => {
  const [state, setState] = useState(false);
  const parser = (arg) =>{
    var string  = arg?.replace(' ','-');
    return arg?.indexOf(' ') > -1 ? parser(string) : string?.toLowerCase();
  }
  useEffect(() => {
    return window.localStorage.getItem('name') ? setState(true) : setState(false);
}, [])
  return (
    <>
    <Navbar  loggedIn={state}/>
    <div className="bg-[#1F0231] w-full h-fit flex items-center p-12">
      <div className="bg-white m-auto flex flex-col text-center p-10 gap-2 w-11/12 rounded">
          <h1 className="text-center lg:text-3xl text-xl font-medium text-[#0c0114]">Increase Your Voting Power</h1>
          <p className="text-center lg:text-xl text-lg font-medium text-[#808080]">Cheer Your Favourite Nominee to Success</p>
          <div className="flex items-end gap-6 w-full mt-8 flex-col lg:flex-row">
            <div className="flex flex-col gap-4 bg-[#1F0332] text-white items-center text-center w-full lg:p-12 gap-10 rounded p-6">
                <span className="flex flex-col text-center"><h1 className="lg:text-5xl text-3xl font-bold">20</h1><p className="lg:text-lg text-base">Votes</p></span>
                <span className="flex flex-col text-center gap-6">
                    <h1 className="lg:text-5xl text-3xl font-medium">$2.50</h1>
                    <Link href="/voting"><span  className="hover:text-white mx-auto bg-white px-6 py-4 rounded hover:bg-[#0c0114] text-[#0c0114] cursor-pointer transition-all duration-500 w-fit ease-in font-bold">Buy</span></Link>
                </span>
            </div>
            <div className="flex flex-col gap-16 bg-[#1F0332] text-white items-center text-center w-full lg:p-12 gap-10 rounded p-6">
                <span className="flex flex-col text-center"><h1 className="lg:text-5xl text-3xl font-bold">45</h1><p className="lg:text-lg text-base">Votes</p></span>
                <span className="flex flex-col text-center gap-6">
                    <h1 className="lg:text-5xl text-3xl font-medium">$5</h1>
                    <Link href="/voting"><span  className="hover:text-white mx-auto bg-white px-6 py-4 rounded hover:bg-[#0c0114] text-[#0c0114] cursor-pointer transition-all duration-500 w-fit ease-in font-bold">Buy</span></Link>
                </span>
            </div>
            <div className="flex flex-col gap-24 bg-[#1F0332] text-white items-center text-center w-full lg:p-12 gap-10 rounded p-6">
                <span className="flex flex-col text-center"><h1 className="lg:text-5xl text-3xl font-bold">70</h1><p className="lg:text-lg text-base">Votes</p></span>
                <span className="flex flex-col text-center gap-6">
                    <h1 className="lg:text-5xl text-3xl font-medium">$7.50</h1>
                    <Link href="/voting"><span  className="hover:text-white mx-auto bg-white px-6 py-4 rounded hover:bg-[#0c0114] text-[#0c0114] cursor-pointer transition-all duration-500 w-fit ease-in font-bold">Buy</span></Link>
                </span>
            </div>
            <div className="flex flex-col gap-36 bg-[#1F0332] text-white items-center text-center w-full lg:p-12 gap-10 rounded p-6">
                <span className="flex flex-col text-center"><h1 className="lg:text-5xl text-3xl font-bold">100</h1><p className="lg:text-lg text-base">Votes</p></span>
                <span className="flex flex-col text-center gap-6">
                    <h1 className="lg:text-5xl text-3xl font-medium">$10</h1>
                    <Link href="/voting"><span  className="hover:text-white mx-auto bg-white px-6 py-4 rounded hover:bg-[#0c0114] text-[#0c0114] cursor-pointer transition-all duration-500 w-fit ease-in font-bold">Buy</span></Link>
                </span>
            </div>
            
          </div>
          </div>
        
    </div>
    </>
  )
}

export default voting;