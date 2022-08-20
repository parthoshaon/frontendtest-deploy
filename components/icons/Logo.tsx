import Image from "next/image"
import React, { FC } from 'react'
import { logo } from "../../public"
import type { IconProps } from "../../typescript"
import Link from 'next/link';
const Logo: FC<IconProps> = (props) => {
  return (
    <Link href="/" ><span {...props}><Image src={logo} layout="responsive" /></span></Link>
  )
}

export default Logo