import { bbgBartle, smoochSans } from '@/app/FONTS/fonts';
import React from 'react';

const TextSide = () => {
    return (
        <div className='flex flex-col items-center'>
            <p className={`${bbgBartle.className} lg:text-2xl flex gap-1.5 text-center mb-2`}>
                <span>TEACH</span>
                <span>.</span>
                <span>LEARN</span>
                <span>.</span>
                <span>SPEARD</span>
                <span>.</span>
            </p>
            <div className={`${smoochSans.className} text-center space-y-2`}>
                <p className='text-3xl'>Dive into ocean of knowledge</p>
                <p className='text-3xl'>Learn from others.</p>
                <p className='text-3xl'>Share your idea.</p>

            </div>


        </div>
    );
};

export default TextSide;