import React from 'react';
import { Button } from '@/components/ui/button';
import BorderdSectionTitle from '../SECTIONCOMPONENT/BorderdSectionTitle';

const SocialMediaGrid = () => {
    return (
        <div>
            <BorderdSectionTitle>Follow Us</BorderdSectionTitle>
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