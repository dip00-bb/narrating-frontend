import { Avatar, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

const Chatbody = () => {
    return (
        <div className='border px-4 py-2'>
            <div className='w-full'>
                <div className='flex items-center gap-2.5'>
                    <div>
                        <Avatar >
                            <AvatarImage src={'/heroforeground.jpg'} />
                        </Avatar>
                    </div>
                    <div>
                        Hello , how are you?
                    </div>
                </div>

            </div>
            <div className='flex justify-end'>
                <div className='flex items-center gap-2.5'>
                    <div>
                        <Avatar >
                            <AvatarImage src={'/heroforeground.jpg'} />
                        </Avatar>
                    </div>
                    <div>
                        Hello , how are you
                    </div>
                </div>
            </div>
                        <div className='w-full'>
                <div className='flex items-center gap-2.5'>
                    <div>
                        <Avatar >
                            <AvatarImage src={'/heroforeground.jpg'} />
                        </Avatar>
                    </div>
                    <div>
                        Hello , how are you?
                    </div>
                </div>

            </div>
            <div className='flex justify-end'>
                <div className='flex items-center gap-2.5'>
                    <div>
                        <Avatar >
                            <AvatarImage src={'/heroforeground.jpg'} />
                        </Avatar>
                    </div>
                    <div>
                        Hello , how are you
                    </div>
                </div>
            </div>
                        <div className='w-full'>
                <div className='flex items-center gap-2.5'>
                    <div>
                        <Avatar >
                            <AvatarImage src={'/heroforeground.jpg'} />
                        </Avatar>
                    </div>
                    <div>
                        Hello , how are you?
                    </div>
                </div>

            </div>
            <div className='flex justify-end'>
                <div className='flex items-center gap-2.5'>
                    <div>
                        <Avatar >
                            <AvatarImage src={'/heroforeground.jpg'} />
                        </Avatar>
                    </div>
                    <div>
                        Hello , how are you
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbody;