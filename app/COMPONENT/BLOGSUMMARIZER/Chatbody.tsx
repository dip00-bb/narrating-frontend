import React from 'react';
import ChatBubble from './ChatBubble';

const Chatbody = () => {
    return (
        <div className='border px-4 py-2 max-h-100 overflow-scroll space-y-8'>
            <div className='w-full'>
                <ChatBubble />
            </div>
            <div className='flex justify-end'>
                <ChatBubble flexDirection='flex-row-reverse' />
            </div>
            <div className='w-full'>
                <ChatBubble />
            </div>
            <div className='flex justify-end'>
                <ChatBubble flexDirection='flex-row-reverse' />
            </div>
            <div className='w-full'>
                <ChatBubble />
            </div>
            <div className='flex justify-end'>
                <ChatBubble flexDirection='flex-row-reverse' />
            </div>
        </div>
    );
};

export default Chatbody;