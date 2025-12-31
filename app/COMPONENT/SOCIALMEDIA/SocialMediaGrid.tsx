import React from 'react';
import DottedBorder from '../COMMONBORDER/DottedBorder';
import { Button } from '@/components/ui/button';
import { smoochSans } from '@/app/FONTS/fonts';

const SocialMediaGrid = () => {
    return (
        <div>
            <div className='mb-4'>
                <p className={`mb-3.5 secondery-fontsize font-bold ${smoochSans.className}`}>Follow Us</p>
                <DottedBorder />
            </div>
            <div className='grid grid-cols-2 gap-1.5'>
                <Button className='bg-(--secondary-color) cursor-pointer'>Facebook</Button>
                <Button className='bg-(--secondary-color) cursor-pointer'>X</Button>
                <Button className='bg-(--secondary-color) cursor-pointer'>Instagram</Button>
                <Button className='bg-(--secondary-color) cursor-pointer'>Youtube</Button>
            </div>
        </div>
    );
};

export default SocialMediaGrid;