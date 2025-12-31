
import React from 'react';
import { Button } from '@/components/ui/button';


interface IBTN{
    children:React.ReactNode,
    classes:string
}

const BTN = (props:IBTN) => {
    return (
        <Button className={`bg-transparent border border-(--secondary-color) text-(--accent-color) hover:text-(--accent-color) cursor-pointer ${props.classes}`}>{props.children}</Button>
    );
};

export default BTN;