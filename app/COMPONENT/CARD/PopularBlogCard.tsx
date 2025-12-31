import { smoochSans } from '@/app/FONTS/fonts';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const PopularBlogCard = () => {
    return (
        <div className='flex items-center justify-between border-b-2 border-(--secondary-color) pb-3'>
            <div>
                <p className={`text-sm md:text-2xl ${smoochSans.className}`}>Time slowly fades where moss grows</p>

                <div className='flex items-center gap-0.5'>
                    <Calendar size={15} />
                    <p className={`${smoochSans.className}`}>11/1/2024</p>
                </div>
            </div>

            <div>
                <div className="w-full relative">
                    <Image
                        src="/heroforeground.jpg"
                        alt="profile"
                        width={150}
                        height={150}
                        className='rounded'
                    />
                </div>
            </div>
        </div>
    );
};

export default PopularBlogCard;