import React from 'react';
import DottedBorder from '../COMMONBORDER/DottedBorder';
import PopularBlogCard from '../CARD/PopularBlogCard';
import { smoochSans } from '@/app/FONTS/fonts';

const PopularBlogs = () => {
    return (
        <div>
            <div className='mb-4'>
                <p className={`mb-3.5 secondery-fontsize font-bold ${smoochSans.className}`}>POPULAR BLOGS</p>
                <DottedBorder />
            </div>

            {/* Popular blog card */}
            <div className='space-y-3.5'>
                <PopularBlogCard />
                <PopularBlogCard />
                <PopularBlogCard />
                <PopularBlogCard />
            </div>
        </div>
    );
};

export default PopularBlogs;