import * as React from "react"
const HoraIcon = (props) => (
  <div className="hora-icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#6335FF"
        d="M14 7A7 7 0 1 1 0 7a7 7 0 0 1 14 0ZM7 3.062a.437.437 0 1 0-.875 0v4.813a.437.437 0 0 0 .22.38l3.063 1.75a.438.438 0 0 0 .434-.76L7 7.621V3.062Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
  </div>
)

export default HoraIcon
