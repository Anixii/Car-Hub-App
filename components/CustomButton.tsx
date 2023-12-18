'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import { CustomButtonTypeProps } from '@/types'
const CustomButton:FC<CustomButtonTypeProps> = ({title,handleClick,containerStyles,btnType}:CustomButtonTypeProps) => {
  return (
    <> 
        <button
            disabled={false}
            type={btnType} 
            className={`custom-btn ${containerStyles}` }
            onClick={() =>handleClick} 

        > 
            <span className={`flex-1`}>{title}</span>
        </button>
    </>
  )
}

export default CustomButton