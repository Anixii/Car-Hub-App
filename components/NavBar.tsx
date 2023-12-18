import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomButton } from './index' 
import logo from '../public/logo.svg'
const NavBar = () => {
  return (
    <header  className='w-full absolute z-10'>
        <nav className='max-w-[1440px] sm:px-16 px-6 py-4 mx-auto flex justify-between items-center'> 
            <Link href={'/'} className='flex justify-center items-center'> 
                <Image src={logo} alt='Cur Hub Logo' width={118} height={18} className='object-contain'/>
            </Link> 

            <CustomButton containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' title='Sign In' btnType='button'/>
        </nav>
    </header>
  )
}

export default NavBar