import React, { ComponentProps, FC } from 'react'
import { IconProps } from "../../typescript"

const Medal: FC<IconProps> = (props) => {
  return (
      <svg {...props} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.9551 49.245V80L40.9776 65.895L53.1301 79.79V48.74" fill="#3E0563" />
          <path d="M39.9999 52.95C54.6216 52.95 66.4749 41.0967 66.4749 26.475C66.4749 11.8533 54.6216 0 39.9999 0C25.3782 0 13.5249 11.8533 13.5249 26.475C13.5249 41.0967 25.3782 52.95 39.9999 52.95Z" fill="#FA9706" />
          <path d="M40.0001 43.46C49.3807 43.46 56.9851 35.8556 56.9851 26.475C56.9851 17.0944 49.3807 9.48999 40.0001 9.48999C30.6196 9.48999 23.0151 17.0944 23.0151 26.475C23.0151 35.8556 30.6196 43.46 40.0001 43.46Z" fill="#3E0563" />
      </svg>
  )
}

export default Medal