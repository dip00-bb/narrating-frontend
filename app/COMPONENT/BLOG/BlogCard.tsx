import { smoochSans } from '@/app/FONTS/fonts';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Heart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';


const BlogCard = () => {
    return (
        <div className='border border-(--secondary-color)/70 grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 h-80'>

            <div className="w-full relative">
                <Image
                    src="/heroforeground.jpg"
                    alt="profile"
                    objectFit="cover"
                    fill
                    className="h-full top-0 left-0 object-cover"
                />
            </div>


            <div className='p-3 flex flex-col  gap-3 h-fit md:h-full sm:justify-between'>

                <div className='flex justify-between '>
                    <div className='bg-transparent border border-(--secondary-color) text-(--accent-color) w-fit px-2 flex items-center gap-0.5'>
                        <span className='font-bold text-2xl mb-1.5'>&#x2022;</span>
                        <span className={`${smoochSans.className} font-semibold`}>Fashion</span>
                    </div>
                    {/* date/ likes */}
                    <div className='flex gap-2'>
                        {/* date */}
                        <div className='flex items-center gap-0.5'>
                            <Calendar size={15} />
                            <p className={`${smoochSans.className}`}>11/1/2024</p>
                        </div>

                        {/* total like */}

                        <div className='flex items-center gap-0.5'>
                            <Heart size={15} />
                            <p className={`${smoochSans.className}`}>10k</p>
                        </div>
                    </div>

                </div>
                <div>
                    {/* title */}
                    <h1 className={`${smoochSans.className} text-4xl font-bold secondery-fontsize`}>Data Analytics : key to Decisions and Business Growth</h1>
                </div>

                <div className='flex justify-between'>
                    <div>
                        <Avatar>
                            <AvatarImage src={'/heroforeground.jpg'} />
                        </Avatar>
                    </div>

                    <div>
                        <Link href={'/all-blogs/55454'} className={`${smoochSans.className} border px-3 py-2 hover:bg-(--secondary-color) hover:border-(--secondary-color)`}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;