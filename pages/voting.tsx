import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Navbar } from '../components';
import { Arrow, MenuIcon, Search } from "../components/icons";
import { motion } from "framer-motion";
import { SearchBar } from "../components/util";
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
      <SearchBar  className="w-full mt-12"  heading={"Voting Categories"}/>
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
    </>
  )
}

export default voting;
