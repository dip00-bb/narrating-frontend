import React from 'react';

interface IInputProps{
    children:React.ReactNode,
    Icon:React.ReactElement,
    seterFunction:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    placeholder:string,
    name:string,
    type:string
}


const InputFields = ({children,Icon,seterFunction,placeholder,name,type}:IInputProps) => {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <p className={`text-xl md:text-2xl`}>{children}:</p>
            </div>

            <div className='border flex items-center gap-2 w-36 md:w-2xs'>
                <div className='border-r px-2.5 py-3'>{Icon}</div>
                <div><input onChange={seterFunction} name={name} type={type} placeholder={placeholder} className='border-0 outline-0 py-3 w-full' /></div>
            </div>
        </div>
    );
};

export default InputFields;