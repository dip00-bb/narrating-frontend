import { BBH_Bartle } from 'next/font/google';
import React from 'react';
const bbgBartle = BBH_Bartle({
    weight: '400',
    subsets: ['latin']
})

const BannerHeader = () => {
    return (
        <div>
            <h1 className={`text-6xl ${bbgBartle.className}`}>LEARN BY TEACHING</h1>
        </div>
    );
};

export default BannerHeader;