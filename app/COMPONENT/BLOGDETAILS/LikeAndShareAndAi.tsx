import { BookMarkedIcon, Bot, HeartMinus, HeartPlus, SquareArrowOutUpRight } from 'lucide-react';
import React from 'react';
import BlogDetailsButton from './BlogButton';


const LikeAndShareAndAi = () => {
    return (
        <div className='flex justify-end gap-2.5'>

            <div>
                <BlogDetailsButton Icon={<HeartPlus />}>12</BlogDetailsButton>
            </div>

            <div>
                <BlogDetailsButton Icon={<HeartMinus />}>10</BlogDetailsButton>
            </div>

            <div>
                <BlogDetailsButton hidden='hidden md:block' Icon={<SquareArrowOutUpRight />}>Share</BlogDetailsButton>
            </div>
            <div>
                <BlogDetailsButton hidden='hidden md:block' Icon={<BookMarkedIcon />}>Save</BlogDetailsButton>
            </div>
            <div>
                <BlogDetailsButton hidden='hidden md:block' Icon={<Bot />}>Summarize</BlogDetailsButton>
            </div>


        </div>
    );
};

export default LikeAndShareAndAi;



