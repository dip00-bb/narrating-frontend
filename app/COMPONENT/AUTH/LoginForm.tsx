"use client"

import React, { useState } from 'react';
import { Eye, EyeClosed, Lock, Mail } from 'lucide-react';
import InputFields from './InputFields';
import PasswordField from './PasswordField';


interface ILOGININTERFACE {
    email: string,
    password: string
}


const LoginForm = () => {

    const [isPassword, setIsPassword] = useState(false)
    const [registerData, setRegisterData] = useState<ILOGININTERFACE>({
        email: "",
        password: "",

    })


    const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(registerData)
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className='space-y-2'>
                <InputFields placeholder='ENTER YOUR EMAIL' name='email' seterFunction={handleUserInfo} Icon={<Mail />} type='email'>Email</InputFields>
                <PasswordField typeState={isPassword} typeToogler={setIsPassword} Icon={<Lock />} EyeOpenIcon={<Eye />} EyeCloseIcon={<EyeClosed />} seterFunction={handleUserInfo}>Password</PasswordField>
            </div>
            <button  className={`w-full py-3 cursor-pointer mt-4 font-bold bg-(--secondary-color)`}>LOGIN</button>
        </form>

    );
};

export default LoginForm;