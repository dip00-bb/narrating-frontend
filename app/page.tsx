import React from 'react';
import Navbar from './COMPONENT/LAYOUTS/Navbar';
import BannerHeader from './COMPONENT/BANNER/BannerHeader';
import BannerFooter from './COMPONENT/BANNER/BannerFooter';
import BlogCard from './COMPONENT/CARD/BlogCard';


const Home = () => {
  return (
    <div>
      <header><Navbar /></header>

      {/* grid layout */}
      <div className=' grid grid-cols-1 md:grid-cols-6 px-0.5'>
        {/* left side */}
        <div className='hidden md:col-span-1 md:block'></div>

        {/* 4 col main layout */}
        <div className='col-span-4 md:border-x-2 md:border-b-2 border-(--secondary-color) p-3'>

          {/* banner */}
          <div className='space-y-2 md:space-y-4 flex  flex-col md:justify-around'>
            <div>
              <BannerHeader />
            </div>
            <div>
              <div className='w-full md:w-120 md:ml-auto'><BannerFooter /></div>
            </div>
          </div>


          {/* Top Blogs */}
          <div className='grid grid-cols-3 '>
            {/* card */}
            <div className='col-span-2 space-y-3.5'>
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>

            {/* popular blog */}
            <div>
          
            </div>
          </div>


        </div>

        {/* right side */}
        <div className='hidden md:col-span-1 md:block'></div>
      </div>
    </div>
  );
};

export default Home;