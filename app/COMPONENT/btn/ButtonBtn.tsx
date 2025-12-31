
import React from 'react';
import { Button } from '@/components/ui/button';
import { smoochSans } from '@/app/FONTS/fonts';


interface IBTN{
    children:React.ReactNode,
    classes:string
}

const BTN = (props:IBTN) => {
    return (
        <Button className={`${smoochSans.className} bg-transparent border border-(--secondary-color) text-(--accent-color) hover:text-(--accent-color) cursor-pointer ${props.classes}`}>{props.children}</Button>
    );
};

export default BTN;