import React, { Component, ComponentType, FC, ReactNode, useId } from 'react';
import { Medal, Star, Stars } from "./icons";
type Content = {
    icon: ReactNode,
    header: string,
    text: string
}
const content:Content[] = [
    {
        icon: <Medal />,
        header: "Promising Talent",
        text: "Promising Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills.",        
    },
    {
        icon: <Star/>,
        header: "Intermediate Talent",
        text: "Intermediate Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills."
    }, {
        icon: <Stars />,
        header: "Exceptional Talent",
        text: "Exceptional Talent is an individual with more than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills."
    }
];
const CTA = () => {
    const Id = useId();
  return (
    <div className="grid text-[#0c0114] p-6 gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {content.map((item,i)=>(
            <div key={Id + i} className="flex flex-col gap-8 p-6 items-center text-center border-2 border-gray-200 rounded-lg mx-auto" data-aos={`zoom-${ i % 2 != 0 ? `in` : `out`}`}>
                {item.icon}
                    <h1>{item.header}</h1>
                    <p className="w-10/12">{item.text}</p>
            </div>
        ))}
    </div>
  )
}

export default CTA;