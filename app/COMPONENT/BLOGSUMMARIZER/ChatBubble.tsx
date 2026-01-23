import { Avatar, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

interface IflexDirection {
    flexDirection?: "flex-row-reverse" | "flex-row"
}

const ChatBubble = ({ flexDirection }: IflexDirection) => {


    return (
        <div className={`flex items-start gap-2.5 text-emerald-700  ${flexDirection}`}>
            <Avatar>
                <AvatarImage src={'/heroforeground.jpg'} />
            </Avatar>
            <div className="flex flex-col w-full leading-1.5 p-4 rounded-sm rounded-es-base bg-gray-800">
                <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-heading">Bonnie Green</span>
                    <span className="text-sm text-body">11:46</span>
                </div>
                <p className="text-sm py-2.5 text-body">That&apos;s awesome. I think our users will really appreciate the improvements.</p>
                <span className="text-sm text-body">Delivered</span>
            </div>
            <div id="dropdownDots" className={`z-10 bg-white shadow-lg w-40 transition-all`}>
            </div>
        </div>

    );
};

export default ChatBubble;