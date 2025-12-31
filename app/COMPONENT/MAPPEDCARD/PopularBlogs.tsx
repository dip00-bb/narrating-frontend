import React from 'react';
import PopularBlogCard from '../CARD/PopularBlogCard';

import BorderdSectionTitle from '../SECTIONCOMPONENT/BorderdSectionTitle';

const PopularBlogs = () => {
    return (
        <div>
            <BorderdSectionTitle>Popular Blogs</BorderdSectionTitle>

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