"use client"
import ThemeChanger from '@/app/THEME/ThemeChanger';
import Link from 'next/link';
import React from 'react';



const Navbar = () => {
    return (
        <div className='grid grid-cols-6 border'>
            {/* left */}
            <div className='col-span-1'></div>

            {/* middle */}
            <div className='col-span-4 grid grid-cols-6 border-x pl-1.5'>
                {/* logo */}
                <div className='col-span-2 border-r py-2 flex gap-1 items-center'>
                    <ThemeChanger/>
                    <Link href={'/'} className='cursor-pointer font-bold text-2xl'>NARRATEIT</Link>
                </div>

                {/* nav items */}
                <div className='col-span-4 flex justify-between items-center px-1.5'>
                    <h1 className='cursor-pointer font-bold text-xl'>HOME</h1>
                    <h1 className='cursor-pointer font-bold text-xl'>BLOGS</h1>
                    <h1 className='cursor-pointer font-bold text-xl'>LOGIN</h1>
                    <h1 className='cursor-pointer font-bold text-xl'>REGISTER</h1>
                </div>
            </div>

            {/* right */}
            <div className='col-span-1'></div>
        </div>
    );
};

export default Navbar;