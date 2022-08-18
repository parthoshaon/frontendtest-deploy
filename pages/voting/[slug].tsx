import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { Navbar } from '../../components';
import { rocket, close } from "../../public";
import Image from "next/image";
const vote = () =>{
    const [data, setData] = useState<string[]>(["Adewale Akinola", "Adewale Akinola","Adewale Akinola","Adewale Akinola","Adewale Akinola","Adewale Akinola","Adewale Akinola","Adewale Akinola","Adewale Akinola", "Adewale Akinola","Adewale Akinola","Adewale Akinola"]);
    const [popUp, setPopUp] = useState<boolean>(false);
    const router:NextRouter = useRouter();
    const { slug } = router.query;
    const [state, setState] = useState(false);
    const [vote, setVote] = useState(70);
    const parser = (arg:string):string =>{
      var string  = arg?.replace('-',' ');
      return arg?.indexOf('-') > -1 ? parser(string) : string;
    }
  useEffect(() => {
      return !!window.localStorage.getItem('name') ? setState(true) : setState(false);
  }, [])
  useEffect(()=>{
    if (vote === 0) {
      setPopUp(true);
    }
  },[vote])
  
    return (
      <>
      <Navbar  loggedIn={state}/>
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
        <div className="flex flex-col items-center content mt-12">
            <h1 className="text-center lg:text-3xl text-xl font-medium w-4/5 text-[#0c0114] capitalize">{parser(typeof slug === "string" ? slug : "")}</h1>
            <div className="lg:w-1/2 w-4/5 flex items-center mx-auto mt-8 gap-6">
              <label className="w-full relative block mx-auto">
                  <span className="absolute inset-y-0 left-2 flex items-center pl-2"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2337 21.8602L17.5217 15.9194C18.9903 14.1735 19.795 11.9768 19.795 9.68999C19.795 4.34701 15.448 0 10.105 0C4.76205 0 0.415039 4.34701 0.415039 9.68999C0.415039 15.033 4.76205 19.38 10.105 19.38C12.1109 19.38 14.0223 18.775 15.6565 17.6265L21.412 23.6124C21.6525 23.8622 21.9761 24 22.3228 24C22.651 24 22.9624 23.8749 23.1987 23.6474C23.7009 23.1641 23.7169 22.3628 23.2337 21.8602ZM10.105 2.52782C14.0543 2.52782 17.2672 5.74069 17.2672 9.68999C17.2672 13.6393 14.0543 16.8522 10.105 16.8522C6.15573 16.8522 2.94286 13.6393 2.94286 9.68999C2.94286 5.74069 6.15573 2.52782 10.105 2.52782Z" fill="#BABABA"/>
                  </svg></span>
                    <input type="text" className="block bg-white w-full py-2 pl-12 pr-3 shadow-sm outline-none border h-[auto] align-middle my-auto rounded-md" placeholder="Nominee's Name, Nominee's Category"/>
                  </label>
  
                  <span className="p-4 text-[#EEE8F2] hover:bg-[#EEE8F2] bg-[#3E0563] hover:text-[#3E0563] transition-all duration-500 ease-in font-semibold rounded cursor-pointer">Search</span>
            </div>
          <div className="text-[#0c0114]">You have <span className="text-3xl text-[#3E0563]">{vote}</span> votes left</div>
          
            <div className="text-[#0c0114]">Increase you voting power <Link href="/increase" ><span className="text-lg text-[#3E0563] cursor-pointer">Here</span></Link> </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8 lg:p-12 md:p-8 p-6">
            {data.map((data)=>{
              const [count,setCount] = useState<number>(1);
              const [votes,setVotes] = useState<number>(750);
              return(
              <span className="flex items-center flex-col gap-6 p-6 shadow-xl hover:shadow-2xl group transition-all duration-500 ease-in cursor-pointer select-none">
                  <span className="w-24 h-24 rounded-full bg-[#1F0231] shadow-xl shadow-[#1F0231]/30 hover:shadow-2xl hover:shadow-[#1F0231]/30 transition-[box-shadow] duration-500 ease-in"></span>
                <span>{data}</span>
                <span>{votes} votes</span>
                <div className="flex items-center mx-auto mt-8 w-fit h-fit">
            <label className="w-full relative block mx-auto">
                <span className="absolute inset-y-0 left-2 flex items-center pl-2">
                <svg  onClick={()=>{setCount((num)=>num-1)}} className="h-1 w-5 cursor-pointer" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 2H0.625C0.45924 2 0.300269 1.89464 0.183058 1.70711C0.0658481 1.51957 0 1.26522 0 1C0 0.734784 0.0658481 0.48043 0.183058 0.292893C0.300269 0.105357 0.45924 0 0.625 0H9.375C9.54076 0 9.69973 0.105357 9.81694 0.292893C9.93415 0.48043 10 0.734784 10 1C10 1.26522 9.93415 1.51957 9.81694 1.70711C9.69973 1.89464 9.54076 2 9.375 2Z" fill="#3E0563"/>
</svg>

                </span>
                  <input type="text" className="block bg-white py-2 pl-12 pr-3 w-24 shadow-sm outline-none  align-middle my-auto rounded-l-md h-max border-2  border-[#3E0563]" value={count} disabled/>
                <span className="absolute inset-y-0 right-2 flex items-center pr-2"><svg  onClick={()=>{setCount((num)=>num+1)}} className="h-3 w-3 cursor-pointer" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11V1" stroke="#3E0563" stroke-width="2" stroke-linecap="round"/>
<path d="M1 6H11" stroke="#3E0563" stroke-width="2" stroke-linecap="round"/>
</svg>
</span>
                </label>

                    <button className={`${vote - count < 0 && `bg-[#3E0563]/75 hover:bg-[#3E0563]/75 hover:text-white`} p-3 text-[#EEE8F2] hover:bg-[#EEE8F2] bg-[#3E0563] hover:text-[#3E0563] transition-all duration-500 ease-in font-semibold rounded-r cursor-pointer h-max`} onClick={()=>{
                      if (vote - count >= 0) {
                        setVotes((votes) => votes + count);
                        setVote((votes) => votes - count)
                      }
                }} disabled={vote === 0 ? true : false }>Vote</button>
          </div>    </span>
            )})}
           </div> 
      </div>
      </>
    )
}

export default vote;
