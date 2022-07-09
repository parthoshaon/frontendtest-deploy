import React from 'react'

const Status = ({icon, text, details}) => {
  return (
      <div className="absolute inset-1/2 z-10">
          <span></span>   
          <h1 className="text-3xl text-[#1F0231] font-bold">Awesome</h1>
      </div>
  )
}

export default Status;