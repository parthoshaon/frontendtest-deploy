import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Navbar } from '../components';
const data = ["Exceptional Data Analyst", "Promising Data Analyst","Exceptional Data Scientist","Promising Data Scientist","Exceptional Visual Designer","Promising Visual Designer","Exceptional Devops Expert","Exceptional Data Analyst","Exceptional Data Analyst","Promising Data Analyst", "Exceptional Data Scientist","Promising Data Scientist","Exceptional Visual Designer","Promising Visual Designer","Exceptional DevOps Expert","Exceptional Data Analyst"]
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
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="40" rx="8" fill="#EEE8F2"/>
  <path d="M18 11H12C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V12C19 11.7348 18.8946 11.4804 18.7071 11.2929C18.5196 11.1054 18.2652 11 18 11ZM17 17H13V13H17V17ZM28 21H22C21.7348 21 21.4804 21.1054 21.2929 21.2929C21.1054 21.4804 21 21.7348 21 22V28C21 28.2652 21.1054 28.5196 21.2929 28.7071C21.4804 28.8946 21.7348 29 22 29H28C28.2652 29 28.5196 28.8946 28.7071 28.7071C28.8946 28.5196 29 28.2652 29 28V22C29 21.7348 28.8946 21.4804 28.7071 21.2929C28.5196 21.1054 28.2652 21 28 21ZM27 27H23V23H27V27ZM25 11C22.794 11 21 12.794 21 15C21 17.206 22.794 19 25 19C27.206 19 29 17.206 29 15C29 12.794 27.206 11 25 11ZM25 17C23.897 17 23 16.103 23 15C23 13.897 23.897 13 25 13C26.103 13 27 13.897 27 15C27 16.103 26.103 17 25 17ZM15 21C12.794 21 11 22.794 11 25C11 27.206 12.794 29 15 29C17.206 29 19 27.206 19 25C19 22.794 17.206 21 15 21ZM15 27C13.897 27 13 26.103 13 25C13 23.897 13.897 23 15 23C16.103 23 17 23.897 17 25C17 26.103 16.103 27 15 27Z" fill="#3E0563"/>
  </svg>
              <span>{data}</span>
  <svg className="w-4 h-4 float-right ml-auto mr-8 group-hover:mr-4 transition-all duration-500 ease-in cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 18L21 12L15 6" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M3 12H20" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21 12H20" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
  </span>
  </Link>
          ))}
         </div> 
    </div>
    </>
  )
}

export default voting;
