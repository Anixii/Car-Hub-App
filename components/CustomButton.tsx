"use client";
import React, { FC } from "react";
import Image from "next/image";
import { CustomButtonTypeProps } from "@/types";
const CustomButton: FC<CustomButtonTypeProps> = ({
  title,
  handleClick,
  containerStyles,
  btnType,
  isDisabled,
  rightIcon,
  textStyles,
}: CustomButtonTypeProps) => { 
  
  return (
    <>
      <button
        disabled={false}
        type={btnType}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon}
              alt="right Icon"
              fill
              className="object-contain"
            />
          </div>
        )}
      </button>
    </>
  );
};

export default CustomButton;
