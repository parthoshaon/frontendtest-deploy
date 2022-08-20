import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Navbar } from '../components';
import { Arrow } from "../components/icons";
const data = ["Exceptional Data Analyst", "Promising Data Analyst","Exceptional Data Scientist","Promising Data Scientist","Exceptional Visual Designer","Promising Visual Designer","Exceptional Devops Expert","Exceptional Data Analyst","Exceptional Data Analyst","Promising Data Analyst", "Exceptional Data Scientist","Promising Data Scientist","Exceptional Visual Designer","Promising Visual Designer","Exceptional DevOps Expert","Exceptional Data Analyst"]
const voting = () => {
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
                <span className="absolute inset-y-0 left-2 flex items-center pl-2"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2337 21.8602L17.5217 15.9194C18.9903 14.1735 19.795 11.9768 19.795 9.68999C19.795 4.34701 15.448 0 10.105 0C4.76205 0 0.415039 4.34701 0.415039 9.68999C0.415039 15.033 4.76205 19.38 10.105 19.38C12.1109 19.38 14.0223 18.775 15.6565 17.6265L21.412 23.6124C21.6525 23.8622 21.9761 24 22.3228 24C22.651 24 22.9624 23.8749 23.1987 23.6474C23.7009 23.1641 23.7169 22.3628 23.2337 21.8602ZM10.105 2.52782C14.0543 2.52782 17.2672 5.74069 17.2672 9.68999C17.2672 13.6393 14.0543 16.8522 10.105 16.8522C6.15573 16.8522 2.94286 13.6393 2.94286 9.68999C2.94286 5.74069 6.15573 2.52782 10.105 2.52782Z" fill="#BABABA"/>
                </svg></span>
                  <input type="text" className="block bg-white w-full py-2 pl-12 pr-3 shadow-sm outline-none border h-[auto] align-middle my-auto rounded-md" placeholder="Nominee's Name, Nominee's Category"/>
                </label>

                <span className="p-4 text-[#EEE8F2] hover:bg-[#EEE8F2] bg-[#3E0563] hover:text-[#3E0563] transition-all duration-500 ease-in font-semibold rounded cursor-pointer">Search</span>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 lg:p-12 md:p-8 p-6">
          {data.map((data,index)=>(
            <Link href={`/voting/${parser(data)}`} key={index}>
            <span className="flex items-center flex-col gap-6 p-6 shadow-xl hover:shadow-2xl group transition-all duration-500 ease-in cursor-pointer select-none">
        
              <span>{data}</span>
<Arrow />
  </span>
  </Link>
          ))}
         </div> 
    </div>
    </>
  )
}

export default voting;
