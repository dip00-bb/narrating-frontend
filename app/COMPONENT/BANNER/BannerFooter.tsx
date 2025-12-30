
import { Roboto } from 'next/font/google';
import React from 'react';
import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const roboto=Roboto({
    subsets:['latin']
})

const BannerFooter = () => {

    return (
        <div>
            <div>
                <div>
                    <p className='text-2xl border-b w-fit pb-2'>Message</p>
                </div>
                <p className={`accent-fontsize ${roboto.className}`}>
                    We&apos;re thrilled to have you here. This is a space where creativity flows, ideas thrive, and the world is yours to explore. Whether you&apos;re here to share your thoughts, find inspiration, or dive into new perspectives, you&apos;ve found the right place. Join us as we discover, learn, and grow together!
                </p>
                <div className='flex gap-2.5 mt-2.5'>
                    <FaSquareXTwitter size={35} className='text-(--secondary-color) cursor-pointer'/>
                    <FaSquareFacebook size={35} className='text-(--secondary-color) cursor-pointer'/>
                    <FaSquareInstagram size={35} className='text-(--secondary-color) cursor-pointer'/>
                </div>
            </div>
        </div>
    );
};

export default BannerFooter;