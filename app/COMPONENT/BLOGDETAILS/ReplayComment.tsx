import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const ReplayComment = () => {
    return (
        <div>
            <div className="flex w-full gap-2 items-end">
                <Textarea placeholder="Type your message here. " />
                <Button className='col-span-2 cursor-pointer'>Replay</Button>
            </div>
        </div>
    );
};

export default ReplayComment;