import React from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";
import { Arrow } from "./icons";
import { SearchBar } from "./util";
const Hero = () => {
  const { div: Div } = motion;
  return (
      <Div 
      initial={{
        y: "-100vw"
      }}
      animate={{ y: 0 }}
      transition={{delay: 0, type: "spring", stiffness: 120 }}
       className="flex flex-col items-center content w-full">
      <SearchBar  className="w-full"  heading={"First Ever Tech Personality Award For Africans in West Africa"} />
      <Link href="/voting" >
        <span className="font-semibold flex gap-4 mt-8 cursor-pointer text-[#0c0114] group group-hover:ml-4"><span className="my-auto group-hover:ml-6 transition-all duration-500"> View all categories</span>
        <Arrow className="my-auto group-hover:ml-4 transition-all duration-500 w-6 h-6" />
        </span>
        </Link>
    </Div>
  )
}

export default Hero;
