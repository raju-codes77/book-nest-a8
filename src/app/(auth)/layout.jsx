import Navabr from '@/components/Navabr';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const layout = ({children}) => {
    return (
        <div>
            <Navabr></Navabr>
            {children}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default layout;