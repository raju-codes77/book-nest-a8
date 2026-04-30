import Navabr from '@/components/Navabr';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navabr></Navabr>
            {children}
        </div>
    );
};

export default layout;