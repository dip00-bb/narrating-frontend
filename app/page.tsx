import React from 'react';
import Navbar from './COMPONENT/LAYOUTS/Navbar';
import BannerHeader from './COMPONENT/BANNER/BannerHeader';
import BannerFooter from './COMPONENT/BANNER/BannerFooter';
import BlogCard from './COMPONENT/CARD/BlogCard';
import { smoochSans } from './FONTS/fonts';
import PopularAuthorCard from './COMPONENT/CARD/PopularAuthorCard';
import DottedBorder from './COMPONENT/COMMONBORDER/DottedBorder';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import RecentBlogs from './COMPONENT/MAPPEDCARD/PopularBlogs';
import PopularAuthors from './COMPONENT/MAPPEDCARD/PopularAuthors';
import SocialMediaGrid from './COMPONENT/SOCIALMEDIA/SocialMediaGrid';
import RelatedBlogCarousel from './COMPONENT/MAPPEDCARD/RelatedBlogCarousel';


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


          {/*Recent and Top Blogs and top author  */}
          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10'>
            {/* blog card */}
            <div className='col-span-2'>
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

            {/* popular blog and author */}
            <div className='justify-between grid grid-cols-2 gap-3.5 lg:block md:space-y-10'>
              <div>
                <RecentBlogs />
              </div>

              <div>
                <PopularAuthors />
              </div>

              <div>
                <SocialMediaGrid />
              </div>

              <div>
                <div className='mb-4'>
                  <p className={`mb-3.5 secondery-fontsize font-bold ${smoochSans.className}`}>Related </p>
                  <DottedBorder />
                </div>
                <RelatedBlogCarousel />
              </div>
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