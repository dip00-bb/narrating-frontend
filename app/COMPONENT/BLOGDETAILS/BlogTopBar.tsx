import React from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

import { Rss, Spotlight } from 'lucide-react';
import { smoochSans } from '@/app/FONTS/fonts';
import BlogDetailsButton from './BlogButton';
const BlogTopBar = () => {
    return (
        <div className='flex  items-center justify-between mb-2 bg-amber-700 py-1 md:py-2 px-1'>
            <div className='flex gap-2 items-center cursor-pointer'>
                <Avatar>
                    <AvatarImage src={'/heroforeground.jpg'} />
                </Avatar>
                <div>
                    <p className={`${smoochSans.className} text-xl md:text-2xl`}>Sunita Williams</p>
                </div>
            </div>

            <div className='flex gap-3.5'>
                <div>
                    <BlogDetailsButton Icon={<Spotlight />}>Follow</BlogDetailsButton>
                </div>
                <div>
                    <BlogDetailsButton Icon={<Rss />}>Subscribe</BlogDetailsButton>
                </div>
            </div>
        </div>
    );
};

export default BlogTopBar;