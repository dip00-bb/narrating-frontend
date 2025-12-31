import React from 'react';
import DottedBorder from '../COMMONBORDER/DottedBorder';
import PopularAuthorCard from '../CARD/PopularAuthorCard';
import { smoochSans } from '@/app/FONTS/fonts';

const PopularAuthors = () => {
    return (
        <div>
            <div className='mb-4'>
                <p className={`mb-3.5 secondery-fontsize font-bold ${smoochSans.className}`}>POPULAR AUTHOR</p>
                <DottedBorder />
            </div>

            <div className='space-y-3.5'>
                <PopularAuthorCard />
                <PopularAuthorCard />
                <PopularAuthorCard />
                <PopularAuthorCard />
            </div>
        </div>
    );
};

export default PopularAuthors;