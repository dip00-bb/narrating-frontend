import React from 'react';

interface Iblofbtn{
    Icon:React.ReactElement,
    children:React.ReactNode
}

const BlogDetailsButton = ({Icon,children}:Iblofbtn) => {
    return (
            <div className='border flex gap-1.5 cursor-pointer p-1 px-1.5'>
                {Icon}
                <p>{children}</p>
            </div>
    );
};

export default BlogDetailsButton;