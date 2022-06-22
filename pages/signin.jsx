import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const signin = () => {
  const router = useRouter();
  const [firerror,setFirError]=useState(false);
  const [lasterror,setLastError]=useState(false);
  const [emerror,setEmError]=useState(false);
  const [phoneerror,setPhoneError]=useState(false);
  const [passworderror,setpassError]=useState(false);
  const [gendererror,setgenError]=useState(false);
  const firstNameEl = useRef();
  const lastNameEl = useRef();
  const emailEl = useRef();
  const phoneEl = useRef();
  const passwordEl = useRef();
  const genderEl = useRef();
const handleSubmission = () =>{
setFirError(false);
setLastError(false);
setEmError(false);
setPhoneError(false);
setpassError(false);
setgenError(false);
const {value: first } = firstNameEl.current;
const {value: last } = lastNameEl.current;
const {value: email } = emailEl.current;
const {value: phone} = phoneEl.current;
const {value: password} = passwordEl.current;
const {value: gender} = genderEl.current;
if( !first || !last || !email || !phone || !password || !gender || phone.length < 10 || email.indexOf("@") < 0 || password.length < 8){
if(!first){
setFirError(true);
}
if(!last){
setLastError(true);
}
if(!email || email.indexOf("@") < 0){
setEmError(true);
}
if(!phone || phone.length < 10){
setPhoneError(true);
}
if(!password || password.length < 8){
setpassError(true);
}
if(!gender){
setgenError(true);
}
  return;
}
window.localStorage.setItem('name',first + ' ' + last);
window.localStorage.setItem('email',email);
window.localStorage.setItem('phone',phone);
window.localStorage.setItem('password',password);
window.localStorage.setItem('gender',gender);
return router.push('/login');
}
  return (
    <div className="bg-[#1F0231] w-full h-fit flex items-center p-12">
    <div className="bg-white m-auto flex flex-col text-center p-10 lg:w-1/2 w-4/5 gap-2">
      <h1><span className="font-bold text-xl w-1/2 mx-auto">Time to vote your favourite Techie, let's make this amazing!</span></h1>
      <h4><span className="font-bold text-lg">Create an account</span></h4>
      <span>Have an account? <Link href="/login"><span className="text-[#FA9706] cursor-pointer">Login in</span></Link></span>
      <span className=" bg-[#D8CDE0]/50 border border-[#D8CDE0] hover:bg-[#D8CDE0] hover:border-[#D8CDE0]/50 transition-all duration-500 ease-in w-full h-auto p-3 flex items-center cursor-pointer"><span className="flex mx-auto gap-1"><span className="w-6 h-6"><svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5108 6.50969C4.13252 4.62575 5.90297 3.27273 8 3.27273C9.12727 3.27273 10.1455 3.67273 10.9455 4.32727L13.2727 2C11.8545 0.763636 10.0364 0 8 0C4.84671 0 2.13183 1.79887 0.82666 4.43335L3.5108 6.50969Z" fill="#EA4335"/>
<path d="M10.694 12.0084C9.9675 12.4775 9.04428 12.7273 8.00022 12.7273C5.91121 12.7273 4.1463 11.3846 3.51821 9.5119L0.825195 11.5566C2.12875 14.1957 4.84356 16 8.00022 16C9.95545 16 11.8238 15.3049 13.223 13.9997L10.694 12.0084Z" fill="#34A853"/>
<path d="M13.2228 13.9997C14.6861 12.6347 15.6364 10.6025 15.6364 8.00002C15.6364 7.52729 15.5636 7.0182 15.4545 6.54547H8V9.63638H12.2909C12.0792 10.6758 11.5109 11.4808 10.6938 12.0084L13.2228 13.9997Z" fill="#4A90E2"/>
<path d="M3.51799 9.51192C3.35888 9.03755 3.27273 8.52917 3.27273 8C3.27273 7.47885 3.35629 6.97787 3.5108 6.50969L0.82666 4.43335C0.291058 5.50695 0 6.71692 0 8C0 9.2797 0.296521 10.4868 0.824975 11.5567L3.51799 9.51192Z" fill="#FBBC05"/>
</svg>
</span> Continue with google
</span>
</span>
<span className="flex text-[#A6A6A6] w-full gap-3"><div className="w-full h-1 rounded-full bg-[#DCDCDC] my-auto align-midle"></div> OR <div className="w-full h-1 rounded-full bg-[#DCDCDC] my-auto align-midle"></div></span>
<span className="flex flex-col gap-8 w-full">
<span className="flex gap-6">
<span className="flex flex-col-reverse text-left gap-2 w-1/2">{firerror && <p className="text-xs text-red-400">Please enter your first name</p>}<input ref={firstNameEl} name="firstname" id="firstname" type="text" className={`peer outline-none ring-2 ${firerror? `focus:ring-red-500 ring-red-200` :`ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`}/><label className={`${firerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="firstname">First Name</label></span>
<span className="flex flex-col-reverse text-left gap-2 w-1/2 float-right ml-auto">{lasterror && <p className="text-xs text-red-400">Please enter your last name</p>}<input name="lastname" id="lastname" ref={lastNameEl} type="text" className={`peer outline-none ring-2 ${lasterror? `focus:ring-red-500 ring-red-200` :`ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`}/><label className={`${lasterror ? `text-red-200 peerfocus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="lastname">Last Name</label></span>
</span>
<span className="flex flex-col-reverse text-left gap-2">{emerror && <p className="text-xs text-red-400">Invalid email adress</p>}<input ref={emailEl} type="email" name="email" id="email"className={`peer outline-none ring-2 ${emerror? `focus:ring-red-500 ring-red-200` :`ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`}/><label className={`${emerror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="email">Email Adress</label></span>
<span className="flex flex-col-reverse text-left gap-2">{phoneerror && <p className="text-xs text-red-400">Invalid phone number</p>}<input ref={phoneEl} type="tel" name="phone" id="phone" className={`peer outline-none ring-2 ${phoneerror? `focus:ring-red-500 ring-red-200` :`ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`}/><label className={`${phoneerror ? `text-red-200 peerfocus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="phone">Phone Number</label></span>
<span className="flex flex-col-reverse text-left gap-2 group">{passworderror && <p className="text-xs text-red-400">Password must be more than 7 characters</p>}<input ref={passwordEl} type="password" name="password" id="password" className={`peer outline-none ring-2 ${passworderror? `focus:ring-red-500 ring-red-200` :`ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm`}/><label className={`${passworderror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} peer-focus:text-base text-xs font-semibold cursor-pointer`} htmlFor="password">Set Password</label></span>
<span className="flex flex-col-reverse text-left gap-2">{gendererror && <p className="text-xs text-red-400">Please select a gender</p>}<select ref={genderEl} name="gender" id="gender" className={`peer outline-none ring-2 ${gendererror? `peer-focus:ring-red-500 ring-red-200` :`ring-[#DCDCDC] focus:ring-gray-300`} p-2 text-gray-500 rounded-sm px-4`}>
  <option value=""></option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  </select><label className={`${gendererror ? `text-red-200 peer-focus:text-red-500` : `text-[#0c0114]`} text-xs peer-focus:text-base font-semibold cursor-pointer`} htmlFor="gender">Gender</label></span>
  <span className="text-sm">By registering you agree to Techtrend Africa's <Link href="/terms"><span className="text-[#FA9706] cursor-pointer">Terms of Use</span></Link> and <Link href="/terms"><span className="text-[#FA9706] cursor-pointer">Privacy Policy</span></Link></span>
<span className="w-full p-3 bg-[#3E0563] text-[#EEE8F2] hover:text-[#3E0563] hover:bg-[#EEE8F2] rounded transition-all duration-500 ease-in cursor-pointer" onClick={handleSubmission}>Create account</span>
</span>
    </div>
    </div>
  )
}

export default signin;