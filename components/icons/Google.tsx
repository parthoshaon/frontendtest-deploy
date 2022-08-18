import React, { FC } from 'react';

const Google:FC<{className: string}> = (props) => {
  return (
      <svg {...props} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5108 6.50969C4.13252 4.62575 5.90297 3.27273 8 3.27273C9.12727 3.27273 10.1455 3.67273 10.9455 4.32727L13.2727 2C11.8545 0.763636 10.0364 0 8 0C4.84671 0 2.13183 1.79887 0.82666 4.43335L3.5108 6.50969Z" fill="#EA4335" />
          <path d="M10.694 12.0084C9.9675 12.4775 9.04428 12.7273 8.00022 12.7273C5.91121 12.7273 4.1463 11.3846 3.51821 9.5119L0.825195 11.5566C2.12875 14.1957 4.84356 16 8.00022 16C9.95545 16 11.8238 15.3049 13.223 13.9997L10.694 12.0084Z" fill="#34A853" />
          <path d="M13.2228 13.9997C14.6861 12.6347 15.6364 10.6025 15.6364 8.00002C15.6364 7.52729 15.5636 7.0182 15.4545 6.54547H8V9.63638H12.2909C12.0792 10.6758 11.5109 11.4808 10.6938 12.0084L13.2228 13.9997Z" fill="#4A90E2" />
          <path d="M3.51799 9.51192C3.35888 9.03755 3.27273 8.52917 3.27273 8C3.27273 7.47885 3.35629 6.97787 3.5108 6.50969L0.82666 4.43335C0.291058 5.50695 0 6.71692 0 8C0 9.2797 0.296521 10.4868 0.824975 11.5567L3.51799 9.51192Z" fill="#FBBC05" />
      </svg>
  )
}

export default Google