import React, { FC } from 'react'
import { IconProps } from "../../typescript"
const Arrow:FC<IconProps> = (props) => {
  return (
      <svg {...props} className="w-4 h-4 float-right ml-auto mr-8 group-hover:mr-4 transition-all duration-500 ease-in cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L21 12L15 6" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12H20" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12H20" stroke="#0C0114" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
  )
}

export default Arrow