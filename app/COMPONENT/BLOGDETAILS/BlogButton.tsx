import { smoochSans } from '@/app/FONTS/fonts';
import React from 'react';

interface Iblofbtn {
    Icon: React.ReactElement,
    children: React.ReactNode,
    hidden?: string,
    handlerFunction?: () => void

}

const BlogDetailsButton = ({ Icon, children, hidden = "",handlerFunction }: Iblofbtn) => {

    return (
        <div onClick={handlerFunction} className='border flex items-center gap-1.5 cursor-pointer py-0.5 md:py-1 px-1 md:px-1.5'>
            {Icon}
            <p className={`${smoochSans.className} ${hidden}`}>{children}</p>
        </div>
    );
};

export default BlogDetailsButton;