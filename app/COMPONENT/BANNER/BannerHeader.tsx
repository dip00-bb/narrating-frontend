import { Button } from '@/components/ui/button';
import { ArrowBigRight } from 'lucide-react';
import { BBH_Bartle } from 'next/font/google';
import React from 'react';
const bbgBartle = BBH_Bartle({
    weight: '400',
    subsets: ['latin']
})

const BannerHeader = () => {
    return (
        <div className='space-y-5 md:space-y-10'>
            <div>
                <h1 className={` primary-fontsize ${bbgBartle.className} text-(--accent-color)`}>LEARN , TEACH AND EXPLORE</h1>
            </div>

            <div>
                <p className='secondery-fontsize'>Share Ideas, Discover More, Explore the World.
                    Join a community where curiosity leads the way, and every post sparks new possibilities. Your next adventure starts here.</p>
            </div>
            <div>
                <Button className='bg-transparent border border-(--secondary-color) cursor-pointer'>EXPLORE MORE <ArrowBigRight /></Button>
            </div>
        </div>
    );
};

export default BannerHeader;