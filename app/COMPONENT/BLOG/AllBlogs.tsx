import React from 'react';
import AllBlogCards from '../MAPPEDCARD/AllBlogCards';
import AllBlogSideBar from './AllBlogSideBar';


const AllBlogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-6 px-2 '>
            <div className='col-span-1'></div>
            <div className='col-span-4 grid grid-cols-1 md:grid-cols-6 '>
                <div className='col-span-4'>
                    <AllBlogCards/>
                </div>

                <div className='col-span-2 hidden md:block'>
                    <div className='px-4 space-y-10 sticky top-0'>
                        <AllBlogSideBar/>
                    </div>
                </div>
            </div>
            <div className='col-span-1'></div>
        </div>
    );
};

export default AllBlogs;