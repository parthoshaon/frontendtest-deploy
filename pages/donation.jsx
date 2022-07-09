import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import image from '../public/images1.png';
import i22 from '../public/TUTN.png';
import { Navbar } from '../components';



const donation = () => {
    const [state, setState] = useState(false);
    useEffect(() => {
      return window.localStorage.getItem('name') ? setState(true) : setState(false);
  }, [])
  
    return (
        <>
      <Navbar  loggedIn={state}/>
        <div className="mt-8">
        <h1 className="text-center lg:text-5xl text-3xl font-medium text-[#0c0114]">Make a Donation</h1>
          <p className="text-center lg:text-xl text-lg font-medium text-[#808080]">Make a contribution to te growth of technology in Africa</p>
        <div className="flex lg:flex-row flex-col gap-4 text-[#0c0114]">
        <div className="flex flex-col w-full" data-aos="slide-right">
              <div className="w-full h-auto block lg:p-12 p-6"><Image src={image} layout="responsive"/></div>
              <div className="w-full lg:p-12 p-6 flex flex-col gap-6 lg:pr-0 pr-0">
                <p className="leading-6 font-medium text-base lg:w-9/12 lg:p-0 pr-6 w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Learjet sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldan PageMaker including versions of Lorem Ipsum.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Lestrade sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldan PageMaker including versions of Lorem Ipsum.
</p>
              </div>
        </div>
        <div className="flex flex-col-reverse w-full" data-aos="slide-right">
              <div className="w-full h-auto block lg:p-12 p-6"><Image src={i22} layout="responsive"/></div>
              <div className="w-full lg:p-12 p-6 flex flex-col gap-6 lg:pr-0 pr-0">
                <p className="leading-6 font-medium text-base lg:w-9/12 lg:p-0 pr-6 w-full">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
              </div>
        </div>
        </div>
        </div>
        </>
      )
    }
    
    export default donation;