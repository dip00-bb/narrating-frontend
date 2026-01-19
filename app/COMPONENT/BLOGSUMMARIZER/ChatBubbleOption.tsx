import React from 'react';

const ChatBubbleOption = () => {
    return (
        <div>
            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownMenuIconButton">
                <li>
                    <a href="#" className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Reply</a>
                </li>
                <li>
                    <a href="#" className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Forward</a>
                </li>
                <li>
                    <a href="#" className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Copy</a>
                </li>
                <li>
                    <a href="#" className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Report</a>
                </li>
                <li>
                    <a href="#" className="block w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded-md">Delete</a>
                </li>
            </ul>
        </div>
    );
};

export default ChatBubbleOption;