import React from 'react';
import SelectFilter from './SelectFilter';
import { smoochSans } from '@/app/FONTS/fonts';

const AllBlogSideBar = () => {
    return (
        <div className='space-y-4'>
            <div className='space-y-2.5'>
                <p className={`${smoochSans.className} text-xl md:text-2xl`}> Search By Author or Title</p>
                <div className='border flex items-center gap-2 '>
                    <input placeholder='SEARCH BY AUTHOR OR TOPIC' className='border-0 outline-0 py-3 w-full px-2' />
                </div>
            </div>

            <div className='space-y-2.5'>
                <p className={`${smoochSans.className} text-xl md:text-2xl`}>POPULAR TAGS</p>
                <div className='flex flex-wrap gap-2'>
                    <p className={`${smoochSans.className} text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>SPORTS</p>
                    <p className={`${smoochSans.className} text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>GAMING</p>
                    <p className={`${smoochSans.className} text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>TECHNOLOGY</p>
                    <p className={`${smoochSans.className} text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>PROGRAMMING</p>
                    <p className={`${smoochSans.className} text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>SCIFI</p>
                    <p className={`${smoochSans.className} text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>MOVIES</p>
                </div>
            </div>


            <div className='space-y-2.5'>
                <p className={`${smoochSans.className} text-xl md:text-2xl`}>FILTER BY</p>
                <div><SelectFilter /></div>
            </div>
        </div>
    );
};

export default AllBlogSideBar;