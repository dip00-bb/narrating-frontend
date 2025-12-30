"use client"
import ThemeChanger from '@/app/THEME/ThemeChanger';
import Link from 'next/link';
import React from 'react';



const Navbar = () => {
    return (
        <div className='grid grid-cols-6 border-2 border-(--secondary-color)'>
            {/* left */}
            <div className='col-span-1'></div>

            {/* middle */}
            <div className='col-span-4 grid grid-cols-6 border-x-2 border-(--secondary-color) pl-1.5'>
                {/* logo */}
                <div className='col-span-2 border-r-2 border-(--secondary-color) py-2 flex gap-1 items-center'>
                    <ThemeChanger/>
                    <Link href={'/'} className='cursor-pointer font-bold text-2xl text-(--accent-color)'>NARRATEIT</Link>
                </div>

                {/* nav items */}
                <div className='col-span-4 flex justify-between items-center'>
                    <h1 className='cursor-pointer font-bold text-xl border-r-2 border-(--secondary-color) h-full items-center flex flex-1 px-1.5 text-(--accent-color)'>HOME</h1>
                    <h1 className='cursor-pointer font-bold text-xl border-r-2 border-(--secondary-color) h-full items-center flex flex-1 px-1.5 text-(--accent-color)'>BLOGS</h1>
                    <h1 className='cursor-pointer font-bold text-xl border-r-2 border-(--secondary-color) h-full items-center flex flex-1 px-1.5 text-(--accent-color)'>LOGIN</h1>
                    <h1 className='cursor-pointer font-bold text-xl h-full items-center flex flex-1 px-1.5 text-(--accent-color)'>REGISTER</h1>
                </div>
            </div>

            {/* right */}
            <div className='col-span-1'></div>
        </div>
    );
};

export default Navbar;