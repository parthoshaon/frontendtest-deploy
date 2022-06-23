import React, {useState, useEffect} from 'react'
import Link from 'next/link';
const links = [{text:'Categories',link:"categories"},{text:'Past editions',link:"pasteditions"},{text:'Future editions',link:"futureeditions"}, {text:'About us',link:"about"}, {text:'Make a donation',link:"donation"} ];
const {floor,random} = Math;
const Navbar = ({loggedIn}) => {
  const [drop, setDrop] = useState(false);
  const [log, setLog] = useState(false);
  const [name, setName] = useState('');
  useEffect(()=>{
    setName(window.localStorage.getItem('name'));
  },[])
  return (
      <div className="bg-white p-4 border-b-[1px] sticky flex gap-14 font-bold px-14  top-0 z-20 w-full">
         <span className="mr-auto flex flex-col items-center">
         <span className="w-10 h-10"><svg  viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M180 180H134.289C134.289 162.365 130.815 144.903 124.067 128.611C117.318 112.319 107.426 97.5156 94.956 85.0464C82.4861 72.5772 67.6821 62.6863 51.3895 55.9385C35.0969 49.1908 17.6347 45.7183 0 45.7194V0C99.4101 0 180 80.5899 180 180Z" fill="#3E0563"/>
<path fillRule="evenodd" clipRule="evenodd" d="M99.9969 180H63.7124C63.7124 163.113 57.0042 146.918 45.0635 134.977C33.1228 123.036 16.9277 116.328 0.0410156 116.328V80.0437C26.5476 80.0547 51.9654 90.5892 70.7084 109.332C89.4514 128.075 99.986 153.493 99.9969 180Z" fill="#FA9706"/>
</svg>
</span>
<span className="text-center text-sm flex flex-col items-center leading-3">The Connected<span> Awards</span></span>
</span>
<div className={`${!drop? `top-[-500%] ease-out` : `flex top-24 h-[90vh] inset-0 right-0 p-12 w-[calc(96.5vw)] transition-all ease-in duration-1000`} lg:flex lg:flex-row flex-col w-4/5 lg:relative lg:top-0 absolute bg-white z-10  lg:h-fit lg:w-full lg:p-0 lg:my-auto lg:align-middle lg:ml-auto`}>
<div className="flex flex-col lg:flex-row gap-10 align-middle my-auto z-10 lg:mx-auto">
         {links.map((link)=>(
          <Link  key={link.link} href={`/${link.link}`}><span className="cursor-pointer hover:text-gray-500 transition-all duration-500 text-[#0c0114]">{link.text}</span></Link>
         ))}
    </div>
    {!loggedIn ? <span className="flex-col flex lg:flex-row gap-6 lg:ml-auto align-middle my-auto z-10 w-fit">
      <Link href="/login"><span className="bg-[#EEE8F2] hover:text-[#EEE8F2] p-3 rounded text-[#3E0563] hover:bg-[#3E0563] cursor-pointer transition-all duration-500 w-fit ease-in">Log in</span></Link>
      <Link href="/signin"><span className="text-[#EEE8F2] hover:bg-[#EEE8F2] p-3 rounded bg-[#3E0563] hover:text-[#3E0563] cursor-pointer transition-all duration-500 w-fit ease-in">Create Account</span></Link>
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
