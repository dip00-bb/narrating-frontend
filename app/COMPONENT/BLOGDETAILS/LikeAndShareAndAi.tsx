import { Bot, HeartMinus, HeartPlus } from 'lucide-react';
import React from 'react';
import BlogDetailsButton from './BlogButton';


const LikeAndShareAndAi = () => {
    return (
        <div className='flex justify-end gap-2.5'>

            <div>
                <BlogDetailsButton Icon={<HeartPlus/>}>12</BlogDetailsButton>
            </div>

            <div>
                 <BlogDetailsButton Icon={<HeartMinus/>}>10</BlogDetailsButton>
            </div>

            <div>
                <BlogDetailsButton Icon={<Bot/>}>Summarize</BlogDetailsButton>
            </div>
        </div>
    );
};

export default LikeAndShareAndAi;



