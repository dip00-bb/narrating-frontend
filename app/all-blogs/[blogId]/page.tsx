"use client"

import BlogTopBar from '@/app/COMPONENT/BLOGDETAILS/BlogTopBar';
import CommentInput from '@/app/COMPONENT/BLOGDETAILS/CommentInput';
import LikeAndShareAndAi from '@/app/COMPONENT/BLOGDETAILS/LikeAndShareAndAi';
import { bbgBartle, smoochSans } from '@/app/FONTS/fonts';

import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="grid grid-cols-6 ">
                <div className='col-span-1'></div>
                <div className='col-span-4 grid grid-cols-6'>
                    <div className='col-span-4'>

                        <div className='sticky top-0 z-50'>
                            <BlogTopBar />
                        </div>

                        <div className='relative w-full h-[25vw]'>
                            <Image
                                src="/heroforeground.jpg"
                                alt="Fill Layout"
                                layout="fill"
                                objectFit='cover'
                            />
                        </div>

                        <div>
                            <div>
                                <h1 className={`text-xl md:text-3xl lg:text-4xl ${bbgBartle.className} font-light leading-15`}>Data Analytics : key to Decisions and Business Growth</h1>
                            </div>

                            <div>
                                <p className={`${smoochSans.className} accent-fontsize`}>

                                    In today’s digital and highly competitive business environment, data analytics has become one of the most powerful tools for decision-making and sustainable growth. Organizations generate massive amounts of data every day from customer interactions, transactions, social media, supply chains, and digital platforms. Data analytics transforms this raw data into meaningful insights that help businesses make smarter decisions, reduce risks, and identify new growth opportunities.
                                    In today’s digital and highly competitive business environment, data analytics has become one of the most powerful tools for decision-making and sustainable growth. Organizations generate massive amounts of data every day from customer interactions, transactions, social media, supply chains, and digital platforms. Data analytics transforms this raw data into meaningful insights that help businesses make smarter decisions, reduce risks, and identify new growth opportunities.
                                    In today’s digital and highly competitive business environment, data analytics has become one of the most powerful tools for decision-making and sustainable growth. Organizations generate massive amounts of data every day from customer interactions, transactions, social media, supply chains, and digital platforms. Data analytics transforms this raw data into meaningful insights that help businesses make smarter decisions, reduce risks, and identify new growth opportunities.
                                    In today’s digital and highly competitive business environment, data analytics has become one of the most powerful tools for decision-making and sustainable growth. Organizations generate massive amounts of data every day from customer interactions, transactions, social media, supply chains, and digital platforms. Data analytics transforms this raw data into meaningful insights that help businesses make smarter decisions, reduce risks, and identify new growth opportunities.
                                </p>
                            </div>
                        </div>

                        <div>
                            <LikeAndShareAndAi />
                        </div>
                        <div>
                            <CommentInput />
                        </div>


                    </div>


                    <div className='col-span-2'>

                    </div>

                </div>
                <div className='col-span-1'></div>
            </div>
        </div>
    );
};

export default page;