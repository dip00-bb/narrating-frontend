import React from 'react';
import PopularAuthorCard from '../CARD/PopularAuthorCard';
import BorderdSectionTitle from '../SECTIONCOMPONENT/BorderdSectionTitle';

const PopularAuthors = () => {
    return (
        <div>
            <BorderdSectionTitle>Popular Author</BorderdSectionTitle>
            <div className='space-y-3.5'>
                <PopularAuthorCard />
                <PopularAuthorCard />
                <PopularAuthorCard />
                <PopularAuthorCard />
            </div>
        </div>
    );
};

export default PopularAuthors;