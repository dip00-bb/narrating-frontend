import { BookMarkedIcon, Bot, EyeIcon, HeartMinus, HeartPlus, SquareArrowOutUpRight } from 'lucide-react';
import React from 'react';
import BlogDetailsButton from './BlogButton';
import { useAppDispatch } from '@/lib/hooks/hook';
import { toogleOpenSummarizer } from '@/lib/features/summarizer/saveBlog';


const LikeAndShareAndAi = () => {

    const dispatch = useAppDispatch()

    const handleShowUi = () => {
        dispatch(toogleOpenSummarizer())
    }

    return (
        <div className='flex justify-end gap-2.5'>

            <div>
                <BlogDetailsButton Icon={<HeartPlus />}>12</BlogDetailsButton>
            </div>

            <div>
                <BlogDetailsButton Icon={<HeartMinus />}>10</BlogDetailsButton>
            </div>
            <div>
                <BlogDetailsButton Icon={<EyeIcon />}>12</BlogDetailsButton>
            </div>
            <div>
                <BlogDetailsButton hidden='hidden md:block' Icon={<SquareArrowOutUpRight />}>Share</BlogDetailsButton>
            </div>
            <div>
                <BlogDetailsButton hidden='hidden md:block' Icon={<BookMarkedIcon />}>Save</BlogDetailsButton>
            </div>
            <div>
                <BlogDetailsButton hidden='hidden md:block' Icon={<Bot />} handlerFunction={handleShowUi}>Summarize</BlogDetailsButton>
            </div>


        </div>
    );
};

export default LikeAndShareAndAi;



