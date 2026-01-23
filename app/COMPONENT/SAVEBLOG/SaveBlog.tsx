import React from 'react';
import SaveBlogTitile from './SaveBlogTitile';
import Collections from './Collections';
import CreateNewCollection from './CreateNewCollection';

const SaveBlog = () => {
    return (
        <div className='border w-fit px-3.5 py-2.5 space-y-3.5'>
            <div><SaveBlogTitile/></div>
            <div><Collections/></div>
            <div><CreateNewCollection/></div>
        </div>
    );
};

export default SaveBlog;