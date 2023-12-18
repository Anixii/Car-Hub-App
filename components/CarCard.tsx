"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CarCardProps } from "@/types";
import { calculateCarRent } from "@/utils"; 
import carModel from '../public/hero.png' 
import wheel from '../public/steering-wheel.svg'
import tire from '../public/tire.svg'
import gas from '../public/gas.svg' 
import rightIcon from '../public/right-arrow.svg'
import { CustomButton } from "./index";
interface CarCardpropsType {
  car: CarCardProps;
}
const CarCard: React.FC<CarCardpropsType> = ({ car }: CarCardpropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    city_mpg,
    cylinders,
    displacement,
    combination_mpg,
    year,
    fuel_type,
    drive,
    highway_mpg,
    make,
    model,
    transmission,
  } = car; 
  const carRent = calculateCarRent(city_mpg, year)
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div> 
      <p className="flex mt-6 text-[32px] font-extrabold"> 
        <span className="self-start text-[14px] font-semibold"> 
            $
        </span>
        {carRent}
        <span className="self-end text-[14px] font-medium"> 
            /day
        </span>
      </p> 
      <div className="relative w-full h-40 my-3 object-contain"> 
        <Image src={carModel} alt="Car" fill priority className="object-contain"  /> 
      </div>
        <div className="relative flex group: w-full mt-2">
            <div className="flex text-gray w-full justify-between group-hover:invisible">
                <div className="flex items-center flex-col justify-center gap-2"> 
                    <Image src={wheel} alt={'wheel'} width={20} height={20}/> 
                    <p className="text=[14px]"> 
                        {transmission === 'a' ? 'Automatic' : 'Manual'}
                    </p>
                </div>
                <div className="flex items-center flex-col justify-center gap-2"> 
                    <Image src={tire} alt={'tire'} width={20} height={20}/> 
                    <p className="text=[14px]"> 
                        {drive.toUpperCase()}
                    </p>
                </div>
                <div className="flex items-center flex-col justify-center gap-2"> 
                    <Image src={gas} alt={'gas icon'} width={20} height={20}/> 
                    <p className="text=[14px]"> 
                        {city_mpg} MPG
                    </p>
                </div>
            </div> 
            <div className="car-card__btn-container"> 
                <CustomButton title="View More" 
                containerStyles="w-full  py=[16px] rounded-full bg-primary-blue" 
                textStyles='text-white text-[14px] leading-[17px] font-bold '
                rightIcon={rightIcon}
                handleClick={() => setIsOpen(true)}
                />
            </div>
        </div>
    </div>
  );
};

export default CarCard;
