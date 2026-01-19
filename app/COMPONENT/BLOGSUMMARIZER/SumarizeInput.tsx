import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import React from 'react';

const SumarizeInput = () => {
    return (
        <div className="flex w-full items-center gap-2">
            <Input type="email" placeholder="Ask question about this blog" />
            <Button type="submit" variant="outline" className='cursor-pointer'>
                <Send/>
            </Button>
        </div>
    );
};

export default SumarizeInput;