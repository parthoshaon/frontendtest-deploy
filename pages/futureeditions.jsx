import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Navbar } from '../components';
const data = [{name:"East African Edition",icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2392 8.52667L17.0381 0.995584H13.055L12.5825 0H7.55997C4.38927 0 1.80981 2.5795 1.80981 5.75011C1.80981 8.92071 4.38932 11.5002 7.55997 11.5002H8.94007V19.9834C8.94007 21.6402 9.88362 23.1202 11.4025 23.8458L11.7253 24L17.2746 21.2842L19.4105 14.012L22.1902 11.5399V8.52667H20.2392ZM20.7107 10.8757L18.1105 13.1882L16.0388 20.242L11.7399 22.3458C10.9177 21.83 10.4195 20.952 10.4195 19.9834V10.0207H7.55992C5.2051 10.0207 3.28923 8.10493 3.28923 5.75011C3.28923 3.39528 5.20505 1.47947 7.55997 1.47947H11.647L12.1194 2.47505H16.0595L19.2604 10.0061H20.7107V10.8757H20.7107Z" fill="#3E0563"/>
<path d="M20.6722 20.9713L19.2527 20.5543L20.4568 16.4543L21.8763 16.8712L20.6722 20.9713Z" fill="#3E0563"/>
</svg>
},{name:"South African Edition",icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2392 8.52667L17.0381 0.995584H13.055L12.5825 0H7.55997C4.38927 0 1.80981 2.5795 1.80981 5.75011C1.80981 8.92071 4.38932 11.5002 7.55997 11.5002H8.94007V19.9834C8.94007 21.6402 9.88362 23.1202 11.4025 23.8458L11.7253 24L17.2746 21.2842L19.4105 14.012L22.1902 11.5399V8.52667H20.2392ZM20.7107 10.8757L18.1105 13.1882L16.0388 20.242L11.7399 22.3458C10.9177 21.83 10.4195 20.952 10.4195 19.9834V10.0207H7.55992C5.2051 10.0207 3.28923 8.10493 3.28923 5.75011C3.28923 3.39528 5.20505 1.47947 7.55997 1.47947H11.647L12.1194 2.47505H16.0595L19.2604 10.0061H20.7107V10.8757H20.7107Z" fill="#3E0563"/>
<path d="M20.6722 20.9713L19.2527 20.5543L20.4568 16.4543L21.8763 16.8712L20.6722 20.9713Z" fill="#3E0563"/>
</svg>
},{name:"North African Edition",icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2392 8.52667L17.0381 0.995584H13.055L12.5825 0H7.55997C4.38927 0 1.80981 2.5795 1.80981 5.75011C1.80981 8.92071 4.38932 11.5002 7.55997 11.5002H8.94007V19.9834C8.94007 21.6402 9.88362 23.1202 11.4025 23.8458L11.7253 24L17.2746 21.2842L19.4105 14.012L22.1902 11.5399V8.52667H20.2392ZM20.7107 10.8757L18.1105 13.1882L16.0388 20.242L11.7399 22.3458C10.9177 21.83 10.4195 20.952 10.4195 19.9834V10.0207H7.55992C5.2051 10.0207 3.28923 8.10493 3.28923 5.75011C3.28923 3.39528 5.20505 1.47947 7.55997 1.47947H11.647L12.1194 2.47505H16.0595L19.2604 10.0061H20.7107V10.8757H20.7107Z" fill="#3E0563"/>
<path d="M20.6722 20.9713L19.2527 20.5543L20.4568 16.4543L21.8763 16.8712L20.6722 20.9713Z" fill="#3E0563"/>
</svg>
},{name:"West African Edition",icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2392 8.52667L17.0381 0.995584H13.055L12.5825 0H7.55997C4.38927 0 1.80981 2.5795 1.80981 5.75011C1.80981 8.92071 4.38932 11.5002 7.55997 11.5002H8.94007V19.9834C8.94007 21.6402 9.88362 23.1202 11.4025 23.8458L11.7253 24L17.2746 21.2842L19.4105 14.012L22.1902 11.5399V8.52667H20.2392ZM20.7107 10.8757L18.1105 13.1882L16.0388 20.242L11.7399 22.3458C10.9177 21.83 10.4195 20.952 10.4195 19.9834V10.0207H7.55992C5.2051 10.0207 3.28923 8.10493 3.28923 5.75011C3.28923 3.39528 5.20505 1.47947 7.55997 1.47947H11.647L12.1194 2.47505H16.0595L19.2604 10.0061H20.7107V10.8757H20.7107Z" fill="#3E0563"/>
<path d="M20.6722 20.9713L19.2527 20.5543L20.4568 16.4543L21.8763 16.8712L20.6722 20.9713Z" fill="#3E0563"/>
</svg>
}]
const futureeditions = () => {
  const [state, setState] = useState(false);
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
              <span clasName="text-lg font-semibold">{data.icon}</span>
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
