import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Navbar } from '../components';
import { Arrow, MenuIcon } from "../components/icons";
import { motion } from "framer-motion";
const data = ["Exceptional Data Analyst", "Promising Data Analyst","Exceptional Data Scientist","Promising Data Scientist","Exceptional Visual Designer","Promising Visual Designer","Exceptional Devops Expert","Exceptional Data Analyst","Exceptional Data Analyst","Promising Data Analyst", "Exceptional Data Scientist","Promising Data Scientist","Exceptional Visual Designer","Promising Visual Designer","Exceptional DevOps Expert","Exceptional Data Analyst"]
const voting = () => {
  const {span: Span} = motion;
  const [state, setState] = useState(false);
  const parser = (arg:string):string =>{
    var string  = arg?.replace(' ','-');
    return arg?.indexOf(' ') > -1 ? parser(string) : string?.toLowerCase();
  }
  useEffect(() => {
    return window.localStorage.getItem('name') ? setState(true) : setState(false);
}, [])
  return (
    <>
    <Navbar  loggedIn={state}/>
      <div className="flex flex-col items-center content mt-12">
          <h1 className="text-center lg:text-7xl text-3xl font-medium w-4/5 text-[#0c0114]">Voting Categories</h1>
          <div className="lg:w-1/2 w-4/5 flex items-center mx-auto mt-8 gap-6">
            <label className="w-full relative block mx-auto">
                <span className="absolute inset-y-0 left-2 flex items-center pl-2"></span>
                  <input type="text" className="block bg-white w-full py-2 pl-12 pr-3 shadow-sm outline-none border h-[auto] align-middle my-auto rounded-md" placeholder="Nominee's Name, Nominee's Category"/>
                </label>

                <span className="p-4 text-[#EEE8F2] hover:bg-[#EEE8F2] bg-[#3E0563] hover:text-[#3E0563] transition-all duration-500 ease-in font-semibold rounded cursor-pointer">Search</span>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 lg:p-12 md:p-8 p-6">
          {data.map((data,i)=>(
            <Link href={`/voting/${parser(data)}`} key={i}>
            <Span 
              initial={{
        y: ((i % 2 !==0) ? -50 : 50),
        opacity: 0
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{delay: 0, type: "spring", stiffness: 120 }}
            className="flex items-center flex-col gap-6 p-6 shadow-xl hover:shadow-2xl group transition-all duration-500 ease-in cursor-pointer select-none">
              <MenuIcon />
              <span>{data}</span>
  <Arrow className="w-4 h-4 float-right ml-auto mr-8 group-hover:mr-4 transition-all duration-500 ease-in cursor-pointer"/>
  </Span>
  </Link>
          ))}
         </div> 
    </div>
    </>
  )
}

export default voting;
