

import { smoochSans } from '@/app/FONTS/fonts';
import React from 'react';
import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';



const BannerFooter = () => {

    return (
        <div>
            <div>
                <div>
                    <p className={`text-2xl border-b w-fit mb-4 ${smoochSans.className}`}>Message</p>
                </div>
                <p className={`accent-fontsize ${smoochSans.className} `}>
                    We&apos;re thrilled to have you here. This is a space where creativity flows, ideas thrive, and the world is yours to explore. Whether you&apos;re here to share your thoughts, find inspiration, or dive into new perspectives, you&apos;ve found the right place. Join us as we discover, learn, and grow together!
                </p>
                <div className='flex gap-2.5 mb-2.5'>
                    <FaSquareXTwitter size={30} className='text-(--secondary-color) cursor-pointer' />
                    <FaSquareFacebook size={30} className='text-(--secondary-color) cursor-pointer' />
                    <FaSquareInstagram size={30} className='text-(--secondary-color) cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default BannerFooter;