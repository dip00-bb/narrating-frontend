import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

interface ICommonInput{
    placeholder?:string
    type?:string
    sendButton:React.ReactElement | string,
    variant: "default" | "outline" | "destructive" | "ghost" | "link",
    name?:string
    handlerFunction?:(e:React.ChangeEvent<HTMLInputElement>)=>void

}


const CommonInput = ({placeholder,type,sendButton,variant,handlerFunction}:ICommonInput) => {
    return (
        <div className="flex w-full items-center gap-2">
            <Input onChange={handlerFunction} type={type} placeholder={placeholder} />
            <Button type="submit" variant={variant} className='cursor-pointer'>
                {sendButton}
            </Button>
        </div>
    );
};

export default CommonInput;