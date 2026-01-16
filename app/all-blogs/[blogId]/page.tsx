"use client"

import BlogContentAndImage from '@/app/COMPONENT/BLOGDETAILS/BlogContentAndImage';
import BlogTopBar from '@/app/COMPONENT/BLOGDETAILS/BlogTopBar';
import CommentInput from '@/app/COMPONENT/BLOGDETAILS/CommentInput';
import Comments from '@/app/COMPONENT/BLOGDETAILS/Comments';
import LikeAndShareAndAi from '@/app/COMPONENT/BLOGDETAILS/LikeAndShareAndAi';
import Sumarizer from '@/app/COMPONENT/BLOGSUMMARIZER/Sumarizer';
import RecentBlogCards from '@/app/COMPONENT/MAPPEDCARD/RecentBlogCards';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-6 px-2">
                <div className='col-span-1'></div>
                <div className='col-span-4 grid grid-cols-1 md:grid-cols-6 gap-5'>
                    <div className='col-span-4 space-y-4 md:space-y-6'>
                        <div className='sticky top-0 z-50'>
                            <BlogTopBar />
                        </div>

                        <div>
                            <BlogContentAndImage />
                        </div>

                        <div>
                            <LikeAndShareAndAi />
                        </div>
                        <div>
                            <CommentInput />
                        </div>
                        <div>
                            <Comments />
                        </div>

                        <div>
                            <Sumarizer/>
                        </div>
                    </div>


                    <div className='col-span-2 relative'>

                        <div className='sticky top-0'>
                            <RecentBlogCards />
                        </div>

                    </div>

                </div>
                <div className='col-span-1'></div>
            </div>
        </div>
    );
};

export default page;