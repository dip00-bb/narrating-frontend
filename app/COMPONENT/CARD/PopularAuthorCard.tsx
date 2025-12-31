import { smoochSans } from '@/app/FONTS/fonts';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Heart } from 'lucide-react';
import React from 'react';

const PopularAuthorCard = () => {
    return (
        <div className='flex justify-between border-b-2 border-(--secondary-color) pb-3'>
            <div className='flex flex-col items-center justify-center gap-1.5'>
                <div className='flex items-center gap-1.5'>
                    <div className='bg-white w-fit h-fit px-1.5 rounded'>
                        <p className='text-black'>1</p>
                    </div>
                    <div>
                        <p className={`text-sm md:text-xl ${smoochSans.className}`}>Laura Bennett</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-1'>
                        <Heart size={15} />
                        <p className={`text-sm ${smoochSans.className}`}>25k Followers</p>
                    </div>
                </div>
            </div>


            <div>

                <Avatar className='w-18 h-18'>
                    <AvatarImage src={'/heroforeground.jpg'} />
                </Avatar>

            </div>
        </div>
    );
};

export default PopularAuthorCard;