import { bbgBartle } from '@/app/FONTS/fonts';
import { IChildren } from '@/app/INTERFACES/ICHILDREN';
import React from 'react';


const AuthHeading = ({children}:IChildren) => {
    return (
        <div>
            <h1 className={`${bbgBartle.className} text-sm md:text-xl`}>{children}</h1>
        </div>
    );
};

export default AuthHeading;