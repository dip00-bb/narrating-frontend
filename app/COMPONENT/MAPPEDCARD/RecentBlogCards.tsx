import React from 'react';
import DottedBorder from '../COMMONBORDER/DottedBorder';
import BlogCard from '../CARD/BlogCard';
import { smoochSans } from '@/app/FONTS/fonts';

const RecentBlogCards = () => {
    return (
        <div>
            <div className='mb-4'>
                <p className={`mb-3.5 secondery-fontsize font-bold ${smoochSans.className}`}>RECENT BLOG</p>
                <DottedBorder />
            </div>
            <div className='space-y-3.5'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
};

export default RecentBlogCards;