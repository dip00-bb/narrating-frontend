import React from 'react';
import PopularBlogs from '../MAPPEDCARD/PopularBlogs';
import PopularAuthors from '../MAPPEDCARD/PopularAuthors';
import SocialMediaGrid from '../SOCIALMEDIA/SocialMediaGrid';
import RelatedBlogCarousel from '../MAPPEDCARD/RelatedBlogCarousel';

const PopularItemsAndSocial = () => {
    return (
        <>
            <div>
                <PopularBlogs />
            </div>

            <div>
                <PopularAuthors />
            </div>

            <div>
                <SocialMediaGrid />
            </div>

            <div>
                <RelatedBlogCarousel />
            </div>
        </>
    );
};

export default PopularItemsAndSocial;