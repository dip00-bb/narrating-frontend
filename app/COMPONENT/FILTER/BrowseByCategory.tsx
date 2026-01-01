import { smoochSans } from '@/app/FONTS/fonts';
import Image from 'next/image';
import React from 'react';

const BrowseByCategory = () => {
    return (
        <div className='flex justify-between'>
            <div className='bg-background px-2 py-1.5 rounded'>
                <div className='mb-4'>
                    <Image
                        src="/heroforeground.jpg"
                        alt="profile"
                        width={120}
                        height={120}
                        className='rounded'
                    />
                </div>
                <div>
                    <p className={`${smoochSans.className} text-center`}>Lifestyle</p>
                </div>
            </div>
            <div className='bg-background px-2 py-1.5 rounded'>
                <div className='mb-4'>
                    <Image
                        src="/heroforeground.jpg"
                        alt="profile"
                        width={120}
                        height={120}
                        className='rounded'
                    />
                </div>
                <div>
                    <p className={`${smoochSans.className} text-center`}>Lifestyle</p>
                </div>
            </div>
            <div className='bg-background px-2 py-1.5 rounded'>
                <div className='mb-4'>
                    <Image
                        src="/heroforeground.jpg"
                        alt="profile"
                        width={120}
                        height={120}
                        className='rounded'
                    />
                </div>
                <div>
                    <p className={`${smoochSans.className} text-center`}>Lifestyle</p>
                </div>
            </div>

            <div className='bg-background px-2 py-1.5 rounded'>
                <div className='mb-4'>
                    <Image
                        src="/heroforeground.jpg"
                        alt="profile"
                        width={120}
                        height={120}
                        className='rounded'
                    />
                </div>
                <div>
                    <p className={`${smoochSans.className} text-center`}>Lifestyle</p>
                </div>
            </div>


            <div className='bg-background px-2 py-1.5 rounded'>
                <div className='mb-4'>
                    <Image
                        src="/heroforeground.jpg"
                        alt="profile"
                        width={120}
                        height={120}
                        className='rounded'
                    />
                </div>
                <div>
                    <p className={`${smoochSans.className} text-center`}>Lifestyle</p>
                </div>
            </div>

            <div className='bg-background px-2 py-1.5 rounded'>
                <div className='mb-4'>
                    <Image
                        src="/heroforeground.jpg"
                        alt="profile"
                        width={120}
                        height={120}
                        className='rounded'
                    />
                </div>
                <div>
                    <p className={`${smoochSans.className} text-center`}>Lifestyle</p>
                </div>
            </div>
        </div>
    );
};

export default BrowseByCategory;