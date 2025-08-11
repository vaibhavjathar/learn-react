import React from 'react'
import { FiShieldOff } from 'react-icons/fi'
import { PiUserCircleCheckThin } from 'react-icons/pi'
import { UNSAFE_WithErrorBoundaryProps } from 'react-router-dom'
const Cards = ({children, bg='bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        {children}</div> 
  )
}
export default Cards

