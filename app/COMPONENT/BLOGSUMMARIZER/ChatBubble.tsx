import { Avatar, AvatarImage } from '@/components/ui/avatar';
import React, { useState } from 'react';
import ChatBubbleOption from './ChatBubbleOption';
    interface IflexDirection {
        flexDirection?: "flex-row-reverse" | "flex-row"
    }
const ChatBubble = ({flexDirection}:IflexDirection) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={`flex items-start gap-2.5 text-emerald-700  ${flexDirection}`}>
            <Avatar>
                <AvatarImage src={'/heroforeground.jpg'} />
            </Avatar>
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 rounded-sm rounded-es-base bg-gray-800">
                <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-heading">Bonnie Green</span>
                    <span className="text-sm text-body">11:46</span>
                </div>
                <p className="text-sm py-2.5 text-body">That&apos;s awesome. I think our users will really appreciate the improvements.</p>
                <span className="text-sm text-body">Delivered</span>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" className=" cursor-pointer inline-flex self-center items-center text-body hover:text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-tertiary rounded-base p-1.5 focus:outline-none relative" type="button">
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="3" d="M12 6h.01M12 12h.01M12 18h.01" /></svg>
            </button>
            <div id="dropdownDots" className={`z-10 bg-white shadow-lg w-40 transition-all ${isOpen ? "absolute top-25 right-17.5" : "hidden"} `}>
                <div><ChatBubbleOption /></div>
            </div>
        </div>

    );
};

export default ChatBubble;