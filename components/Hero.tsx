'use client'
import React from "react";
import { CustomButton } from "./index";
import Image from "next/image";
import image from '../public/hero.png'
const Hero = () => {
  const onHandleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rend a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          StreamLine your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          handleClick={onHandleScroll}
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
    <div className="hero__image-container"> 
        <div className="hero__image"> 
            <Image src={image} fill className="object-contain" alt="hero"/>
        </div>
            <div className="hero__image-overlay"></div>
    </div>
    </div>
  );
};

export default Hero;
