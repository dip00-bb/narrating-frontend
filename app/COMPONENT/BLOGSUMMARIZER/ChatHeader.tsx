import { bbgBartle } from '@/app/FONTS/fonts';
import { toogleOpenSummarizer } from '@/lib/features/summarizer/summarizer';

import { useAppDispatch } from '@/lib/hooks/hook';
import { X } from 'lucide-react';
import React from 'react';

const ChatHeader = () => {

    const dispatch=useAppDispatch()

    const handleCloseAiChat=()=>{
        dispatch(toogleOpenSummarizer())
    }

    return (
        <div className='flex justify-between'>
            <h1 className={`${bbgBartle.className}`}>Ask About this blog</h1>
            <div className='cursor-pointer' onClick={handleCloseAiChat}><X/></div>
        </div>
    );
};

export default ChatHeader;