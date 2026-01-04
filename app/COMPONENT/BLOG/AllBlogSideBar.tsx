import React from 'react';
import SelectFilter from './SelectFilter';
import { smoochSans } from '@/app/FONTS/fonts';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface IsidebarProps{
    setPanelOpen:(arg:boolean)=>void
}

const AllBlogSideBar = ({setPanelOpen}:IsidebarProps) => {
    return (
        <div className='space-y-4 py-4 md:py-0'>
            <div className='space-y-2.5 hidden md:block '>
                <p className={`${smoochSans.className} text-xl md:text-2xl`}> Search By Author or Title</p>
                <div className='border flex items-center gap-2 w-2xs '>
                    <input placeholder='SEARCH BY AUTHOR OR TOPIC' className='border-0 outline-0 py-3 w-full px-2' />
                </div>
            </div>

            <div className='space-y-2.5 w-fit'>
                <div className='flex justify-between'><p className={`${smoochSans.className} text-xl md:text-2xl`}>POPULAR TAGS</p> <span onClick={()=>setPanelOpen(false)} className='md:hidden'><X/></span> </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                    <p className={`${smoochSans.className} text-xl md:text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>SPORTS</p>
                    <p className={`${smoochSans.className} text-xl md:text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>GAMING</p>
                    <p className={`${smoochSans.className} text-xl md:text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>TECHNOLOGY</p>
                    <p className={`${smoochSans.className} text-xl md:text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>PROGRAMMING</p>
                    <p className={`${smoochSans.className} text-xl md:text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>SCIFI</p>
                    <p className={`${smoochSans.className} text-xl md:text-2xl font-semibold border py-1 px-2 hover:bg-(--secondary-color) hover:text-white cursor-pointer`}>MOVIES</p>
                </div>
            </div>


            <div className='space-y-2.5'>
                <p className={`${smoochSans.className} text-xl md:text-2xl`}>FILTER BY</p>
                <div><SelectFilter /></div>
            </div>

            <div className='flex justify-between'>
                <Button>Reset</Button>
                <Button onClick={()=>setPanelOpen(false)}>Search</Button>
            </div>
        </div>
    );
};

export default AllBlogSideBar;