import React from 'react';
import BannerHeader from './BannerHeader';
import BannerFooter from './BannerFooter';

const Banner = () => {
    return (

        <div className='space-y-2 md:space-y-4 flex  flex-col md:justify-around'>
            <div>
                <BannerHeader />
            </div>
            <div>
                <div className='w-full md:w-120 md:ml-auto'><BannerFooter /></div>
            </div>
        </div>

    );
};

export default Banner;