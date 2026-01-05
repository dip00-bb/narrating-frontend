import React from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

import { Rss, Spotlight } from 'lucide-react';
import { smoochSans } from '@/app/FONTS/fonts';
const BlogTopBar = () => {
    return (
        <div className='flex  items-center justify-between my-5 bg-amber-700 py-2 px-1'>
            <div className='flex gap-2 items-center cursor-pointer'>
                <Avatar>
                    <AvatarImage src={'/heroforeground.jpg'} />
                </Avatar>

                <div>
                    <p className={`${smoochSans.className} text-2xl`}>Sunita Williams</p>
                </div>
            </div>

            <div className='flex gap-3.5'>
                <div className='flex py-1.5 px-2 items-center border cursor-pointer'>
                    <div><Rss /></div>
                    <p>Subscribe</p>
                </div>

                <div className='flex py-1.5 px-2 items-center border cursor-pointer'>
                    <div><Spotlight /></div>
                    <p>Follow</p>
                </div>
            </div>
        </div>
    );
};

export default BlogTopBar;