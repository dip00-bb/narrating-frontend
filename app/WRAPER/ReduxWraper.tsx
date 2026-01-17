"use client"
import { store } from '@/lib/store';
import React from 'react';
import { Provider } from 'react-redux';

interface IBTN{
    children:React.ReactNode,
}

const ReduxWraper = (props:IBTN) => {
    return <Provider store={store} >{props.children}</Provider>
};

export default ReduxWraper;