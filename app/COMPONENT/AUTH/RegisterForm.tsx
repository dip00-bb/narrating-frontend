"use client"

import { smoochSans } from '@/app/FONTS/fonts';
import { Eye, EyeClosed, Lock, Mail, MoveUpRight, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import AuthHeading from './AuthHeading';
import InputFields from './InputFields';
import PasswordField from './PasswordField';
import { registerInfo, useHandleUserRegisterMutation } from '@/lib/features/authenticationSlices/public/publicApiSlice';




const RegisterForm = () => {

    const [isPassword, setIsPassword] = useState(false)
    const [agree, setAgree] = useState(false);


    const [registerData, setRegisterData] = useState<registerInfo>({
        username: "",
        email: "",
        password: "",

    })


    const [handleUserRegister, { isError, isLoading, isSuccess, error }] = useHandleUserRegisterMutation()

    const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (!agree) {
            return
        }
        e.preventDefault()
        const response = await handleUserRegister(registerData)
        console.log(response)
        console.log(registerData)
    }

    useEffect(() => {
        if (isError ) {
            alert(error?.data?.message);
        }

        if (isLoading) {
            alert("loading")
        }

        if (isSuccess) {
            alert("Successfull")
        }
    }, [isError, isLoading, isSuccess, error])


    return (
        <form onSubmit={handleSubmit}>
            <div className='border-b px-4 py-4 md:py-8'>
                <AuthHeading>Create New Account</AuthHeading>
            </div>

            <div className={`${smoochSans.className} space-y-4 px-2 p-2`}>

                <InputFields placeholder='ENTER YOUR NAME' name='username' seterFunction={handleUserInfo} Icon={<User />} type='text'>Username</InputFields>


                <InputFields placeholder='ENTER YOUR EMAIL' name='email' seterFunction={handleUserInfo} Icon={<Mail />} type='email'>Email</InputFields>


                <PasswordField typeState={isPassword} typeToogler={setIsPassword} Icon={<Lock />} EyeOpenIcon={<Eye />} EyeCloseIcon={<EyeClosed />} seterFunction={handleUserInfo}>Password</PasswordField>

                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-xl md:text-2xl'>Terms and conditions:</p>
                    </div>

                    <div className={`w-36 md:w-2xs`} >
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
                        <p className='text-xl md:text-2xl'>Do You Agree?</p>
                    </div>

                    <div className={`grid grid-cols-2 w-36 md:w-2xs`} >
                        <div onClick={() => setAgree(true)} className={`px-6 py-3 border text-xl cursor-pointer hover:bg-(--secondary-color) ${agree && 'bg-(--secondary-color)'}`}>
                            <p> Yes</p>
                        </div>
                        <div onClick={() => setAgree(false)} className={`px-6 py-3 border text-xl cursor-pointer hover:bg-(--secondary-color) ${!agree && 'bg-(--secondary-color)'}`}>
                            <p>No</p>
                        </div>
                    </div>

                </div>

                <button disabled={!agree} className={`w-full py-3 ${agree ? 'bg-(--secondary-color)' : 'bg-(--secondary-color)/50'} cursor-pointer mt-4 font-bold `}>JOIN WITH US</button>
            </div>


        </form>
    );
};

export default RegisterForm;