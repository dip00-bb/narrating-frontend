import AuthHeading from '@/app/COMPONENT/AUTH/AuthHeading';
import ForgetPassword from '@/app/COMPONENT/AUTH/ForgetPassword';
import LoginForm from '@/app/COMPONENT/AUTH/LoginForm';
import React from 'react';


const page = () => {
    return (
        <div className='max-w-2xl mx-auto pb-3 px-2'>
            <div className='space-y-4 my-4 border-b border-x '>
                <div className='px-4 py-4 md:py-8 border-y'>
                    <AuthHeading>Welcome Back</AuthHeading>
                </div>
                <div className='px-2'>
                    <LoginForm />
                </div>
                <div className='px-4 py-4 md:py-8 border-y'>
                    <AuthHeading>FORGET PASSWORD</AuthHeading>
                </div>
                <div className='px-2 pb-3'>
                    <ForgetPassword />
                </div>
            </div>
        </div>
    );
};

export default page;