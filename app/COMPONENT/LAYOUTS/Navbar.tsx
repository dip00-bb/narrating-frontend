"use client"
import ThemeChanger from '@/app/THEME/ThemeChanger';
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';




const Navbar = () => {

    const [open, setOpen] = useState(false)

    const content = (<>
            {open ? <div onClick={() => setOpen(false)} className='cursor-pointer md:hidden'><IoClose size={30} /></div> : <div onClick={() => setOpen(true)} className='cursor-pointer md:hidden'><GiHamburgerMenu size={30} /></div>}
        </>)


    return (
        <div className='grid md:grid-cols-6 md:border-2 border-(--secondary-color)'>
            {/* left */}
            <div className='hidden md:col-span-1 md:block'></div>

            {/* middle */}
            <div className='flex-col col-span-4 md:grid grid-cols-6 md:border-x-2 border-(--secondary-color)'>
                {/* logo */}
                <div className='col-span-2 md:border-r-2 border-(--secondary-color) py-2 flex justify-between md:justify-normal gap-1 items-center flex-row-reverse md:flex-row'>

                    <div className='flex items-center gap-2'>
                        <div className='ml-2'><ThemeChanger /></div>
                        {content}
                    </div>


                    <Link href={'/'} className='cursor-pointer font-bold text-2xl text-(--accent-color) pr-1.5'>NARRATEIT</Link>



                </div>

                {/* nav items */}
                <div className={`flex justify-between flex-col md:col-span-4 md:flex-row items-center absolute  ${open ? ' transition-all delay-200 top-15 left-0 bg-(--secondary-color)/90 md:bg-transparent w-full':'-top-40'} md:static `}>

                    <Link href={'/'} className='cursor-pointer font-bold text-xl md:border-r-2 border-(--secondary-color) h-full items-center flex flex-1 px-1.5 md:text-(--accent-color) text-red-500'>HOME</Link>
                    <Link href={'/all-blogs'} className='cursor-pointer font-bold text-xl md:border-r-2 border-(--secondary-color) h-full items-center flex flex-1 px-1.5 md:text-(--accent-color) text-red-500'>BLOGS</Link>
                    <Link href={'/login'} className='cursor-pointer font-bold text-xl md:border-r-2 border-(--secondary-color) h-full items-center flex flex-1 px-1.5 md:text-(--accent-color) text-red-500'>LOGIN</Link>
                    <Link href={'/register'} className='cursor-pointer font-bold text-xl md:h-full items-center flex flex-1 px-1.5 md:text-(--accent-color) text-red-500'>REGISTER</Link>


                </div>
            </div>

            {/* right */}
            <div className='hidden md:col-span-1 md:block'></div>
        </div>
    );
};

export default Navbar;