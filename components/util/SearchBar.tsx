import React, { FC } from 'react'
import {Search } from "../icons";
import type {PropTypes, Props} from "../../typescript";
//  First Ever Tech Personality Award For Africans in West Africa
const SearchBar:FC<PropTypes<Props, Heading>> = ({heading}) => {
  return (
    <div>
          <h1 className="text-center lg:text-7xl text-3xl font-medium w-4/5 text-[#0c0114]">{heading}</h1>
          <div className="lg:w-1/2 w-4/5 flex items-center mx-auto mt-8 gap-6">
            <label className="w-full relative block mx-auto">
              <span className="absolute inset-y-0 left-2 flex items-center pl-2"><Search  className="h-5 w-5"/></span>
              <input type="text" className="block bg-white w-full py-2 pl-12 pr-3 shadow-sm outline-none border h-[auto] align-middle my-auto rounded-md" placeholder="Nominee's Name, Nominee's Category"/>
                </label>
                <span className="p-4 text-[#EEE8F2] hover:bg-[#EEE8F2] bg-[#3E0563] hover:text-[#3E0563] transition-all duration-500 ease-in font-semibold rounded cursor-pointer">Search</span>
          </div>
    </div>
  )
}

export default SearchBar