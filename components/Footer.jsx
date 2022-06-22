import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from '../public/connectedAwards.png';
const about = ["The Connected Magazine" ,"Past Edition","Celebrated Techies"];
const legal = ["Terms Of Service" ,"Privacy Policy"];
const social = ["Linkedin"];
const contact = ["+23470572199571","Chat On Whatsapp", "connectedawards@gmail.com"];
const Footer = () => {
  return (
    <div className="bg-[#1F0231] text-white flex flex-col items-center p-12 gap-20 w-full">
        <div className="grid  gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full">
        <div className="flex flex-col gap-4">
            <Link href="/"><span className="text-[#FA9706]">About</span></Link>
            {about.map((link)=>(
                <Link href="/" key={link}><span>{link}</span></Link>
            ))}
        </div>
        <div className="flex flex-col gap-4">
            <Link href="/"><span className="text-[#FA9706]">Legal</span></Link>
            {legal.map((link)=>(
                <Link href="/" key={link}><span>{link}</span></Link>
            ))}
        </div>
        <div className="flex flex-col gap-4">
            <Link href="/"><span className="text-[#FA9706]">Social</span></Link>
            {social.map((link)=>(
                <Link href="/" key={link}><span>{link}</span></Link>
            ))}
        </div>
        <div className="flex flex-col gap-4">
            <Link href="/"><span className="text-[#FA9706]">Contact</span></Link>
            {contact.map((link)=>(
                <Link href="/" key={link}><span>{link}</span></Link>
            ))}
        </div>
        </div>
        <div className="flex w-full flex-col lg:flex-row gap-8">
            <span className="flex flex-col gap-0">
              <span className="block w-36 h-36"><Image src={image} layout="responsive"/></span>
              <span className="-mt-[3rem]">Celebrating Techies Globally</span>
            </span>
            <span className="float-right lg:ml-auto align-middle my-auto text-sm">&copy; 2022 The Connected Awards - All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer;
