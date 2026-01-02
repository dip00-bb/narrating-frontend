"use client"

import React, { useState } from 'react';
import InputFields from './InputFields';
import { Mail } from 'lucide-react';

const ForgetPassword = () => {
    const [email, setEmail] = useState({
        email: ""
    })

    const submitEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail({ ...email, [e.target.name]: e.target.value });
    }
    return (
        <form>
            <InputFields seterFunction={submitEmail} Icon={<Mail />} name='email' placeholder='ENTER YOUR EMAIL' type='email'>Email</InputFields>
            <button className={`w-full py-3 cursor-pointer mt-4 font-bold bg-(--secondary-color)`}>RESET</button>
        </form>
    );
};

export default ForgetPassword;