import React from 'react';
import Navbar from './COMPONENT/LAYOUTS/Navbar';
import BannerHeader from './COMPONENT/BANNER/BannerHeader';


const Home = () => {
  return (
    <div>
      <header><Navbar /></header>

      {/* banner */}
      <div className='grid grid-cols-6'>
        <div className='col-span-1 '></div>
        <div className='col-span-4 border-x-2 border-b-2 border-(--secondary-color)'>
          <div className='flex justify-between bg-cover  h-[70vh]'>
            <div>
              <div>
                <BannerHeader />
              </div>
            </div>

          </div>
        </div>


        <div className='col-span-1'></div>
      </div>
    </div>
  );
};

export default Home;