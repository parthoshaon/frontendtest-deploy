import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Navbar } from '../../components';
const data = [{ name: "Adewale Akinola" , votes: 750 }, { name: "Adewale Akinola" , votes: 750 },{ name: "Adewale Akinola" , votes: 750 },{ name: "Adewale Akinola" , votes: 750 },{ name: "Adewale Akinola" , votes: 750 },{ name: "Adewale Akinola" , votes: 750 },{ name: "Adewale Akinola" , votes: 750 },{ name: "Adewale Akinola" , votes: 750 },{ name: "Adewale Akinola" , votes: 750 }, { name: "Adewale Akinola" , votes: 750 },{ name: "Adewale Akinola" , votes: 750 },{ name: "Adewale Akinola" , votes: 750 }]
const vote = () =>{
    const router = useRouter();
    const {slug} = router.query;
    const [state, setState] = useState(false);
    const [vote, setVote] = useState(70);
    const parser = (arg) =>{
      var string  = arg?.replace('-',' ');
      return arg?.indexOf('-') > -1 ? parser(string) : string;
    }
    useEffect(() => {
      return window.localStorage.getItem('name') ? setState(true) : setState(false);
  }, [])
    return (
      <>
      <Navbar  loggedIn={state}/>
        <div className="flex flex-col items-center content mt-12">
            <h1 className="text-center lg:text-3xl text-xl font-medium w-4/5 text-[#0c0114] capitalize">{parser(slug)}</h1>
            <div className="lg:w-1/2 w-4/5 flex items-center mx-auto mt-8 gap-6">
              <label className="w-full relative block mx-auto">
                  <span className="absolute inset-y-0 left-2 flex items-center pl-2"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.2337 21.8602L17.5217 15.9194C18.9903 14.1735 19.795 11.9768 19.795 9.68999C19.795 4.34701 15.448 0 10.105 0C4.76205 0 0.415039 4.34701 0.415039 9.68999C0.415039 15.033 4.76205 19.38 10.105 19.38C12.1109 19.38 14.0223 18.775 15.6565 17.6265L21.412 23.6124C21.6525 23.8622 21.9761 24 22.3228 24C22.651 24 22.9624 23.8749 23.1987 23.6474C23.7009 23.1641 23.7169 22.3628 23.2337 21.8602ZM10.105 2.52782C14.0543 2.52782 17.2672 5.74069 17.2672 9.68999C17.2672 13.6393 14.0543 16.8522 10.105 16.8522C6.15573 16.8522 2.94286 13.6393 2.94286 9.68999C2.94286 5.74069 6.15573 2.52782 10.105 2.52782Z" fill="#BABABA"/>
                  </svg></span>
                    <input type="text" className="block bg-white w-full py-2 pl-12 pr-3 shadow-sm outline-none border h-[auto] align-middle my-auto rounded-md" placeholder="Nominee's Name, Nominee's Category"/>
                  </label>
  
                  <span className="p-4 text-[#EEE8F2] hover:bg-[#EEE8F2] bg-[#3E0563] hover:text-[#3E0563] transition-all duration-500 ease-in font-semibold rounded cursor-pointer">Search</span>
            </div>
            <div clasName="text-[#0c0114]">You have <span className="text-3xl text-[#3E0563]">{vote}</span> votes left</div>
            <div clasName="text-[#0c0114]">Incease you voting power <span className="text-lg text-[#3E0563]">here</span> </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 lg:p-12 md:p-8 p-6">
            {data.map((data)=>(
              <span className="flex items-center flex-col gap-6 p-6 shadow-xl hover:shadow-2xl group transition-all duration-500 ease-in cursor-pointer">
              <span className="w-24 h-24 rounded-full bg-[#1F0231] shadow-xl shadow-[#1F0231]/30"></span>
                <span>{data.name}</span>
                <span></span>
    </span>
            ))}
           </div> 
      </div>
      </>
    )
}

export default vote;