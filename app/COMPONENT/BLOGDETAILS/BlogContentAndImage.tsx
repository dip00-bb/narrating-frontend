import { bbgBartle, smoochSans } from '@/app/FONTS/fonts';
import Image from 'next/image';
import React from 'react';

const BlogContentAndImage = () => {
    return (
        <div>
            <div className='relative w-full h-[50vw] md:h-[25vw]'>
                <Image
                    src="/heroforeground.jpg"
                    alt="Fill Layout"
                    layout="fill"
                    objectFit='cover'
                />
            </div>

            <div>
                <div>
                    <h1 className={`text-sm md:text-3xl lg:text-4xl ${bbgBartle.className} font-light leading-7 md:leading-15`}>Data Analytics : key to Decisions and Business Growth</h1>
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
        </div>
    );
};

export default BlogContentAndImage;