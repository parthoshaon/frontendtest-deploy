import Image from "next/image"
import React from 'react'
import { logo } from "../../public"

const Logo = () => {
  return (
   <span ><Image src={logo} layout="responsive" /></span>
  )
}

export default Logo