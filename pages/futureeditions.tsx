import React, { FC, ReactNode, useEffect, useState } from 'react'
import Link from 'next/link';
import { Navbar } from '../components';
import { Africa } from '../components/icons';
type Data ={
  name: string,
  icon: ReactNode
}
const data:Data[] = [
  {name:"East African Edition",icon: <Africa/>},
  {name:"South African Edition",icon: <Africa />},
  {name:"North African Edition",icon: <Africa />},
  {name:"West African Edition",icon: <Africa />}
]
const futureeditions:FC = () => {
  const [state, setState] = useState<boolean>(false);
  useEffect(() => {
    return window.localStorage.getItem('name') ? setState(true) : setState(false);
}, [])
  return (
    <>
    <Navbar  loggedIn={state}/>
      <div className="flex flex-col items-center content mt-12">
      <h1 className="text-center lg:text-3xl text-xl font-medium text-[#0c0114]">Future Editions</h1>
        <p className="text-center lg:text-xl text-lg font-medium text-[#808080]">Nominate candidates for future editions</p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 lg:p-12 md:p-8 p-6">
          {data.map((data)=>(
            <span className="flex items-center flex-col gap-6 p-6 shadow-xl hover:shadow-2xl group transition-all duration-500 ease-in cursor-pointer">
              <span className="text-lg font-semibold">{data.icon}</span>
              <span className="text-[#3E0563] font-semibold text-base">{data.name}</span>
      <Link href="/nominate"><span className="text-[#EEE8F2] hover:bg-[#EEE8F2] p-3 rounded bg-[#3E0563] hover:text-[#3E0563] cursor-pointer transition-all duration-500 w-fit ease-in">Nominate</span></Link>

  </span>
          ))}
         </div> 
    </div>
    </>
  )
}

export default futureeditions;
