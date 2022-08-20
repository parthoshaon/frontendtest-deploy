import React, { FC } from 'react';
import Link from 'next/link';
import { PropTypes, Props } from "../../typescript";
type Text = {text: string};
const FootLink:FC<PropTypes<Props, Text>> = ({text, ...props}) => {
  return (
    <Link href="/"><span {...props}>{text}</span></Link>
  )
}

export default FootLink