import React from 'react';
import RegisterForm from '../COMPONENT/AUTH/RegisterForm';
import TextSide from '../COMPONENT/AUTH/TextSide';

const RegisterPage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-6 px-4 lg:px-0'>

            <div></div>
            <div className='flex py-2 col-span-4 px-0.5'>
                <div className='flex-1 hidden lg:flex items-center justify-center border px-2'>
                    <TextSide />
                </div>

                <div className='flex-1 border-y border-r border-l'>
                    <RegisterForm />
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default RegisterPage;