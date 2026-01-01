"use client"

import { bbgBartle, smoochSans } from '@/app/FONTS/fonts';
import { Eye, EyeClosed, Lock, Mail, MoveUpRight, User } from 'lucide-react';
import React, { useState } from 'react';

interface IUSERINTERFACE{
    userName:string,
    email:string,
    password:string
}

const RegisterForm = () => {

    const [isPassword, setIsPassword] = useState(false)
    const [agree,setAgree]=useState(false);


    const [registerData,setRegisterData]=useState<IUSERINTERFACE>({
        userName:"",
        email:"",
        password:"",

    })

    const handleUserInfo=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setRegisterData ({...registerData,[e.target.name] : e.target.value});
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        if(!agree){
            return
        }
        e.preventDefault()
        console.log(registerData)
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-3xl'>
            <div className='border-2 px-4 py-8 mb-5'>
                <h1 className={`${bbgBartle.className} text-xl`}>CREATE NEW ACCOUNT</h1>
            </div>

            <div className={`${smoochSans.className} space-y-4`}>
                {/* user name */}
                <div className='flex items-center justify-between'>
                    <div>
                        <p className={`text-2xl`}>USERNAME:</p>
                    </div>

                    <div className='border flex items-center gap-2 w-2xs'>
                        <div className='border-r px-2.5 py-3 '><User /></div>
                        <div><input onChange={handleUserInfo} name='userName' type="text" placeholder='ENTER YOUR NAME' className='border-0 outline-0 py-3 w-full' /></div>
                    </div>
                </div>


                {/* Email  */}

                <div className='flex items-center justify-between'>
                    <div>
                        <p className={`text-2xl`}>Email:</p>
                    </div>

                    <div className='border flex items-center gap-2 w-2xs'>
                        <div className='border-r px-2.5 py-3'><Mail /></div>
                        <div>
                            <input onChange={handleUserInfo} name="email" type="email" placeholder='ENTER YOUR EMAIL' className='border-0 outline-0 py-3 w-full' />
                        </div>
                    </div>
                </div>

                {/* Password */}

                <div className='flex items-center justify-between '>
                    <div>
                        <p className={`text-2xl`}>Password:</p>
                    </div>

                    <div className='border flex items-center gap-2 w-2xs'>
                        <div className='border-r px-2.5 py-3 '><Lock /></div>
                        <div className='flex items-center  w-full'>
                            <input onChange={handleUserInfo} name='password' type={isPassword ? "password" : "text"} placeholder='ENTER YOUR PASSWORD' className='border-0 outline-0 py-3 w-full' />
                            <div onClick={() => (setIsPassword(!isPassword))} className='w-fit h-fit place-items-end  mr-2'>{isPassword ? <Eye /> : <EyeClosed />}</div>
                        </div>

                    </div>


                </div>

                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-2xl'>Terms and condition</p>
                    </div>

                    <div className={`w-2xs`} >
                        <div className='border flex items-center gap-2 cursor-pointer hover:text-(--secondary-color)'>

                            <div className='px-4 flex-1'> <p>Read Documentatio</p></div>
                            <div className='border-l py-3  flex-1 flex justify-end mr-2'>
                                <MoveUpRight />
                            </div>
                        </div>

                    </div>

                </div>


                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-2xl'>Do You Agree?</p>
                    </div>

                    <div className={`grid grid-cols-2 w-2xs`} >
                        <div onClick={()=>setAgree(true)} className={`px-6 py-3 border text-xl cursor-pointer hover:bg-(--secondary-color) ${agree && 'bg-(--secondary-color)'}`}>
                            <p> Yes</p>
                        </div>
                        <div onClick={()=>setAgree(false)} className={`px-6 py-3 border text-xl cursor-pointer hover:bg-(--secondary-color) ${!agree && 'bg-(--secondary-color)'}`}>
                            <p>No</p>
                        </div>
                    </div>

                </div>

            </div>

            <button disabled={!agree} className={`w-full py-3 ${agree ? 'bg-(--secondary-color)':'bg-(--secondary-color)/50'} cursor-pointer mt-4 font-bold`}>JOIN WITH US</button>
        </form>
    );
};

export default RegisterForm;