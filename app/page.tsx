import React from 'react';
import Navbar from './COMPONENT/LAYOUTS/Navbar';
import BannerHeader from './COMPONENT/BANNER/BannerHeader';
import BannerFooter from './COMPONENT/BANNER/BannerFooter';


const Home = () => {
  return (
    <div>
      <header><Navbar /></header>

      {/* banner */}
      <div className='grid grid-cols-6'>
        <div className='col-span-1 '></div>
        <div className='col-span-4 border-x-2 border-b-2 border-(--secondary-color) p-4'>
          <div className='space-y-4 flex md:h-[70vh] flex-col md:justify-around'>
            <div>
              <BannerHeader />
            </div>
            <div>
              <div className='w-full md:w-120 md:ml-auto'><BannerFooter /></div>
            </div>
          </div>
        </div>
        <div className='col-span-1'></div>
      </div>
    </div>
  );
};

export default Home;