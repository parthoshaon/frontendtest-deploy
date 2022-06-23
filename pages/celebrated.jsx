import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Navbar } from '../components';
const data = [{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},{name:"Sarah Olalore",role:"Exceptional Visual Designer"},]
const celebrated = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    return window.localStorage.getItem('name') ? setState(true) : setState(false);
}, [])
  return (
    <>
    <Navbar  loggedIn={state}/>
      <div className="flex flex-col items-center content mt-12">
      <h1 className="text-center lg:text-3xl text-xl font-medium text-[#0c0114]">Celebated Techies</h1>
        <p className="text-center lg:text-xl text-lg font-medium text-[#808080]">A look into some of our past winners</p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 lg:p-12 md:p-8 p-6">
          {data.map((data)=>(
            <span className="flex items-center flex-col gap-6 p-6 shadow-xl hover:shadow-2xl group transition-all duration-500 ease-in cursor-pointer">
              <span className="lg:w-64 lg:h-64 w-24 h-24 bg-[#D1D1D6]"></span>
              <span clasName="text-lg font-semibold">{data.name}</span>
              <span className="text-[#3E0563] font-semibold text-base">{data.role}</span>
  </span>
          ))}
         </div> 
    </div>
    </>
  )
}

export default celebrated;
