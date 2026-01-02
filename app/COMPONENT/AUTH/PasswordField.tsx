import React from 'react';



interface IPasswordProps{
    children:React.ReactNode,
    Icon:React.ReactElement,
    seterFunction:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    typeToogler:(prevState:boolean)=>void
    typeState:boolean,
    EyeOpenIcon:React.ReactElement,
    EyeCloseIcon:React.ReactElement
}




const PasswordField = ({children,Icon,seterFunction,typeState,typeToogler,EyeOpenIcon,EyeCloseIcon}:IPasswordProps) => {
    return (
        <div className='flex items-center justify-between '>
            <div>
                <p className={`text-xl md:text-2xl`}>{children}:</p>
            </div>

            <div className='border flex items-center gap-2 w-36 md:w-2xs'>
                <div className='border-r px-2.5 py-3 '>{Icon}</div>
                <div className='flex items-center  w-full'>
                    <input onChange={seterFunction} name='password' type={typeState ? "password" : "text"} placeholder='ENTER YOUR PASSWORD' className='border-0 outline-0 py-3 w-full' />
                    <div onClick={() => (typeToogler(!typeState))} className='w-fit h-fit place-items-end  mr-2'>{typeState ? EyeOpenIcon: EyeCloseIcon }</div>
                </div>

            </div>
        </div>
    );
};

export default PasswordField;