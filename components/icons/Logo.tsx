import Image from "next/image"
import React, { FC } from 'react'
import { logo } from "../../public"
import { IconProps } from "../../typescript"

const Logo: FC<IconProps> = (props) => {
  return (
   <span {...props}><Image src={logo} layout="responsive" /></span>
  )
}

export default Logo