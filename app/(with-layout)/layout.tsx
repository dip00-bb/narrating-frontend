import React from 'react';
import Navbar from '../COMPONENT/LAYOUTS/Navbar';
import Footer from '../COMPONENT/LAYOUTS/Footer';

interface IBTN {
    children: React.ReactNode,
}


const layout = (props: IBTN) => {
    return (
        <div>
            <header>
                <Navbar />
                
            </header>
            <main>
                {props.children}
            </main>
            <footer><Footer /></footer>
        </div>
    )
};

export default layout;