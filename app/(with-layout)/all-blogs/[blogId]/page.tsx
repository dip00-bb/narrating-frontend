"use client"

import BlogContentAndImage from '@/app/COMPONENT/BLOGDETAILS/BlogContentAndImage';
import BlogTopBar from '@/app/COMPONENT/BLOGDETAILS/BlogTopBar';
import CommentInput from '@/app/COMPONENT/BLOGDETAILS/CommentInput';
import Comments from '@/app/COMPONENT/BLOGDETAILS/Comments';
import LikeAndShareAndAi from '@/app/COMPONENT/BLOGDETAILS/LikeAndShareAndAi';
import Sumarizer from '@/app/COMPONENT/BLOGSUMMARIZER/Sumarizer';
import RecentBlogCards from '@/app/COMPONENT/MAPPEDCARD/RecentBlogCards';
import { useAppSelector } from '@/lib/hooks/hook';
import { RootState } from '@/lib/store';
import React from 'react';


const BlogDetails = () => {

    const { isOpen } = useAppSelector((state: RootState) => state.counter)

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-6 px-2">
                <div className='col-span-1'></div>
                
                <div className='col-span-4 grid grid-cols-1 lg:grid-cols-6 gap-5'>
                    <div className='lg:col-span-4 space-y-4 md:space-y-6'>
                        <div className='sticky top-0 z-50'>
                            <BlogTopBar />
                        </div>

                        <div>
                            <BlogContentAndImage />
                        </div>

                        <div className='relative'>
                            <LikeAndShareAndAi />
                        </div>
                        <div>
                            <CommentInput />
                        </div>
                        <div>
                            <Comments />
                        </div>

                        <div className={`transition-all absolute  ${isOpen ?'top-[55%] lg:top-[95%] left-4 lg:left-[62%] z-30':'-top-150 left-4 lg:left-[62%] z-30'}`}>
                            <Sumarizer />
                        </div>
                    </div>


                    <div className='lg:col-span-2'>
                        <RecentBlogCards />   
                    </div>

                </div>

                <div className='col-span-1'></div>
            </div>
        </div>
    );
};

export default BlogDetails;