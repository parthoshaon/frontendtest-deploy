import React,{useEffect, useState, useRef} from 'react';
import { useRouter } from 'next/router';
import {Google, LinkedIn} from "../components/icons";
import Link from 'next/link';
const login = () => {
const router = useRouter();
  const [emerror,setEmError]=useState<boolean>(false);
  const [passworderror,setpassError]=useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  useEffect(() => {
    setEmail(window.localStorage.getItem('email') ?? "");
    setPassword(window.localStorage.getItem('password') ?? "");
  }, [])
  
const handleSubmission = () =>{
setEmError(false);
setpassError(false);
if(!email || !password ||   email.indexOf("@") < 0 || password.length < 8){
  if(!email || email.indexOf("@") < 0){
  setEmError(true);
  }
  if(!password || password.length < 8){
     setpassError(true); 
  }
return;
}
return router.push('/')
}
  return (
    <div className="bg-[#1F0231] w-full h-fit flex items-center lg:p-12 p-4">
    <div className="bg-white m-auto flex flex-col text-center p-10 lg:w-1/2 w-full gap-2">
      <h1><span className="font-bold text-xl w-1/2 mx-auto">Let's pick up where we left off yeah!</span></h1>
      <h4><span className="font-bold text-lg">Log in to your account</span></h4>
      <span>Don't have an account?<Link href="/signin"><span className="text-[#FA9706] cursor-pointer">Sign Up</span></Link></span>
      <span className=" bg-[#D8CDE0]/50 border border-[#D8CDE0] hover:bg-[#D8CDE0] hover:border-[#D8CDE0]/50 transition-all duration-500 ease-in w-full h-auto p-3 flex items-center justify-center cursor-pointer gap-1"><Google className="w-6 h-6"/>Continue with google</span>
<span className="flex text-[#A6A6A6] w-full gap-3"><div className="w-full h-1 rounded-full bg-[#DCDCDC] my-auto align-middle"></div> OR <div className="w-full h-1 rounded-full bg-[#DCDCDC] my-auto align-middle"></div></span>
<span className="flex flex-col gap-8 w-full">
<span className="flex flex-col-reverse text-left gap-2">{emerror && <p className="text-xs text-red-400">Invalid email address</p>}<input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email"className={`peer outline-none ring-2 ${emerror? `focus:ring-red-500 ring-red-200` :`ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`}/><label className={`${emerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="email">Email Address</label></span>
<span className="flex flex-col-reverse text-left gap-2 group">{passworderror && <p className="text-xs text-red-400">Password must be more than 7 characters</p>}<input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" id="password" className={`peer outline-none ring-2 ${passworderror? `focus:ring-red-500 ring-red-200` :`ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`}/><label className={`${passworderror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="password">Password</label></span>
<span className="w-full p-3 bg-[#3E0563] text-[#EEE8F2] hover:text-[#3E0563] hover:bg-[#EEE8F2] rounded transition-all duration-500 ease-in cursor-pointer" onClick={handleSubmission}>Login</span>
<Link href="/reset"><span className="w-full p-3 bg-[#EEE8F2] text-[#3E0563] hover:text-[#EEE8F2] hover:bg-[#3E0563] rounded transition-all duration-500 ease-in cursor-pointer">Forgot Password</span></Link>
</span>
    </div>
    </div>
  )
}

export default login;
