import React, { FC } from 'react'

const Star:FC = (props) => {
  return (
      <svg {...props} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_11212)">
              <path d="M43.8631 4.14858L52.8861 22.4314C53.5135 23.703 54.7267 24.5841 56.1301 24.7877L76.307 27.7197C79.8414 28.2337 81.2515 32.5758 78.695 35.0672L64.0951 49.2984C63.0805 50.2879 62.6166 51.7147 62.8569 53.1115L66.3028 73.2066C66.9069 76.726 63.2123 79.4093 60.0517 77.7489L42.0058 68.2621C40.7509 67.6029 39.2507 67.6029 37.9958 68.2621L19.9499 77.7489C16.7893 79.411 13.0947 76.726 13.6988 73.2066L17.1447 53.1115C17.385 51.7147 16.9211 50.2879 15.9065 49.2984L1.30659 35.0672C-1.24994 32.5741 0.16016 28.232 3.69458 27.7197L23.8715 24.7877C25.2749 24.5841 26.4881 23.703 27.1155 22.4314L36.1385 4.14858C37.7171 0.946242 42.2828 0.946242 43.8631 4.14858Z" fill="#FA9706" />
          </g>
          <defs>
              <clipPath id="clip0_1_11212">
                  <rect width="80" height="80" fill="white" />
              </clipPath>
          </defs>
      </svg>
  )
}

export default Star