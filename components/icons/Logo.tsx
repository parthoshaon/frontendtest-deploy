import Image from "next/image"
import React, { FC } from 'react'
import { logo } from "../../public"

const Logo:FC = () => {
  return (
   <span  ><Image src={logo} layout="responsive" /></span>
  )
}

export default Logo