import Image from "next/image"
import React, { FC } from 'react'
import { logo } from "../../public"

const Logo: FC<{ className: string}> = (props) => {
  return (
   <span {...props}  ><Image src={logo} layout="responsive" /></span>
  )
}

export default Logo