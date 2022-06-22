import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from '../public/images3.png';
import i22 from '../public/images2.png';
import { Navbar } from '../components';



const awards = () => {
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
        <div className="mt-8">
        <h1 className="text-center lg:text-3xl text-xl font-medium text-[#0c0114]">The Connected Awards</h1>
        <p className="text-center lg:text-xl text-lg font-medium text-[#808080]">Learn about us</p>
        <div className="w-full h-full block lg:p-12 p-6"><Image src={image} layout="responsive"/></div>
        <div className="grid grid-cols-1 lg:grid-cols-2" data-aos="slide-right">
              <div className="w-full lg:p-12 p-6 flex flex-col gap-6 lg:pr-0 pr-0">
                    <h1 className="text-xl lg:text-4xl font-bold">Conecting Techies Globally</h1>
                <p className="leading-6 font-medium text-base lg:w-9/12 lg:p-0 pr-6 w-full">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div className="w-full h-auto block lg:p-12 p-6"><Image src={i22} layout="responsive"/></div>
        </div>
        </div>
        </>
      )
    }
    
    export default awards;