import React, {useState, useEffect, FC, useId} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Logo } from "./icons";
import { signOut } from "next-auth/react"
type Links = {
  text: string;
  link: string,
}
const links:Links[] = [{text:'Categories',link:"voting"},{text:'Past editions',link:"celebrated"},{text:'Future editions',link:"futureeditions"}, {text:'About us',link:"awards"}, {text:'Make a donation',link:"donation"} ];
const { floor, random }: { floor: (num: number) => number, random: () => number } = Math;
const Navbar: FC<{ loggedIn: boolean }> = ({ loggedIn }) => {
  const [drop, setDrop] = useState<boolean>(false);
  const [log, setLog] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const router = useRouter();
  const Id = useId()
  useEffect(()=>{
    setName(window.localStorage?.getItem('name') ?? "");
  },[])
  return (
      <div className="bg-white p-4 border-b-[1px] sticky flex gap-14 font-bold px-14  top-0 z-20 w-full">
      <Logo className="w-24 h-auto cursor-pointer"/>
<div className={`${!drop? `top-[-500%] ease-out` : `flex top-24 h-[90vh] inset-0 right-0 p-12 w-[calc(96.5vw)]`} transition-all ease-in duration-1000 lg:flex lg:flex-row flex-col w-4/5 lg:relative lg:top-0 absolute bg-white z-10  lg:h-fit lg:w-full lg:p-0 lg:my-auto lg:align-middle lg:ml-auto`}>
<div className="flex flex-col lg:flex-row gap-10 align-middle my-auto z-10 lg:mx-auto">
         {links.map(({link,text}:Links, i)=>(
          <Link  key={Id + i} href={`/${link}`}><span className="cursor-pointer hover:text-gray-500 transition-all duration-500 text-[#0c0114]">{text}</span></Link>
         ))}
    </div>
    {!loggedIn ? <span className="flex-col flex lg:flex-row gap-6 lg:ml-auto align-middle my-auto z-10 w-fit">
      <Link href="/login"><span className="bg-[#EEE8F2] hover:text-[#EEE8F2] p-3 rounded text-[#3E0563] hover:bg-[#3E0563] cursor-pointer transition-all duration-500 w-fit ease-in">Log in</span></Link>
    </span> :
    <span  className="flex-col flex lg:flex-row gap-6 lg:ml-auto align-middle my-auto z-10 w-fit">
      <span className="flex gap-2 align-middle my-auto"><svg className="w-5 h-5" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2997 0H4.29942L0.700562 12.9577H4.30675L1.24051 24H2.32069L12.7589 11.0417H7.47099L13.2997 0Z" fill="#FA9706"/>
</svg>
{floor(random() * 100)}
</span>
<span className="h-10 w-px bg-[#DBDBDB]"></span>
      <span className="flex gap-2 align-middle my-auto">
<span>
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0.000366211C4.02996 0.000366211 0 4.02953 0 8.99997C0 13.9704 4.02956 17.9996 9 17.9996C13.9708 17.9996 18 13.9704 18 8.99997C18 4.02953 13.9708 0.000366211 9 0.000366211ZM9 2.69135C10.6446 2.69135 11.9772 4.02439 11.9772 5.66816C11.9772 7.31232 10.6446 8.64497 9 8.64497C7.35623 8.64497 6.02359 7.31232 6.02359 5.66816C6.02359 4.02439 7.35623 2.69135 9 2.69135ZM8.99802 15.6466C7.35781 15.6466 5.85557 15.0493 4.69687 14.0605C4.41461 13.8198 4.25173 13.4668 4.25173 13.0963C4.25173 11.4293 5.60098 10.095 7.26847 10.095H10.7323C12.4002 10.095 13.7443 11.4293 13.7443 13.0963C13.7443 13.4672 13.5822 13.8194 13.2996 14.0602C12.1413 15.0493 10.6386 15.6466 8.99802 15.6466Z" fill="#3E0563"/>
</svg>
</span>
<span className="flex cursor-pointer" onClick={()=>setLog(!log)}>{name}
                <svg className={`w-5 h-5 ${ log?`rotate-180`: ``}`} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3333 6.66666L7.99996 10L4.66663 6.66666" stroke="#0C0114" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                < span className={`${!log? `top-[-500%] ease-out hidden lg:flex` : `flex top-16 h-fit w-max  py-12`} transition-all ease-in duration-1000 lg:absolute bg-[#3E0563] text-white`}>
                  <span className="border-y py-3 px-12 hover:px-10 w-fit flex hover:text-[#3E0563] hover:bg-white group" onClick={() => signOut({ redirect: false, callbackUrl: "/" })}
                  >
                <svg className="w-4 h-4 my-auto align-middle group-hover:mr-4 transition-all ease-in duration-1000" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.38574 15.5H3.38574C2.55731 15.5 1.88574 14.8285 1.88574 14V5C1.88574 4.17157 2.55731 3.5 3.38574 3.5H6.38574V5H3.38574V14H6.38574V15.5Z" className="fill-white group-hover:fill-[#3E0563]"/>
<path d="M10.3813 13.5388L11.4465 12.4826L8.50709 9.51817H15.3643C15.7785 9.51817 16.1143 9.18239 16.1143 8.76817C16.1143 8.35395 15.7785 8.01817 15.3643 8.01817H8.49269L11.478 5.05807L10.4218 3.99292L5.62866 8.74559L10.3813 13.5388Z" className="fill-white group-hover:fill-[#3E0563]"/>
</svg>
Logout
                </span>
                </span>
          
</span>
         </span>
            
      </span>
      }
    </div>
    
    <div className="my-auto ml-auto float-right lg:hidden cursor-pointer">
    <div className={`
    w-12 h-1 bg-black cursor-pointer rounded-full
    before:content-[''] before:w-12 before:h-1 before:absolute before:bg-black before:cursor-pointer before:rounded-full before:mt-2.5
    after:content-[''] after:w-12 after:h-1 after:absolute after:bg-black after:cursor-pointer after:rounded-full after:-mt-2.5
    transition-all duration-500 ease-in
    after:transition-all after:duration-500  after:ease-in
    before:transition-all before:duration-500  before:ease-in
    
    ${drop ? `w-0 before:rotate-[135deg] after:rotate-45 after:right-[70px] before:right-[70px] after:mt-0 before:mt-0` : ``}
    `}
    onClick={()=>setDrop(!drop)}
    ></div>
    </div>
    </div>
  )
}

export default Navbar;
