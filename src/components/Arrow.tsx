import React from 'react'

function Arrow() {
  return (
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 100"
    className="absolute bottom-8 right-10 w-24 h-12 opacity-60 animate-bounce"
  >
    <path
      d="M10,50 Q100,10 190,50"
      fill="none"
      stroke="white"
      strokeWidth="3"
      strokeDasharray="8 8"
      strokeLinecap="round"
    />
    <polygon
      points="180,45 190,50 180,55"
      fill="white"
      opacity="0.8"
    />
  </svg>
);

  
}

export default Arrow