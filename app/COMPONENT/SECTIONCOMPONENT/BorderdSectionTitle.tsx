import { smoochSans } from "@/app/FONTS/fonts";
import DottedBorder from "../COMMONBORDER/DottedBorder";
import React from "react";

interface IChildren{
    children:React.ReactNode
}

const BorderdSectionTitle = ({children}:IChildren) => {
    return (
        <div>
            <div className='mb-4'>
                <p className={`mb-3.5 secondery-fontsize font-bold ${smoochSans.className}`}>{children}</p>
                <DottedBorder />
            </div>
        </div>
    );
};

export default BorderdSectionTitle;