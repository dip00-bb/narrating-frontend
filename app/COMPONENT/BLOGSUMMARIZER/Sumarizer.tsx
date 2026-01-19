import React from 'react';
import SumarizeInput from './SumarizeInput';
import Chatbody from './Chatbody';
import ChatHeader from './ChatHeader';

const Sumarizer = () => {


    return (
        <div className={`w-[95vw] h-135 md:w-100 mx-auto space-y-3.5 border px-4 py-2.5 bg-background`}>
            <div>
                <ChatHeader />
            </div>
            <div>
                <Chatbody />
            </div>
            <div>
                <SumarizeInput />
            </div>
        </div>
    );
};

export default Sumarizer;