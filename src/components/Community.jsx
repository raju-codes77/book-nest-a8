import React from 'react';
import { IoArrowRedoCircle } from 'react-icons/io5';
import { MdOutlineGroups } from 'react-icons/md';
import { PiBookOpenUserThin } from 'react-icons/pi';

const Community = () => {
    return (
        <div className='mt-4 w-3/4 mx-auto space-y-4 sm:flex gap-3 justify-around my-5'>
            <div className='flex items-center gap-3 bg-yellow-100 px-5 py-10 rounded-md shadow-sm'>
                <p className='text-yellow-500 text-5xl'><PiBookOpenUserThin /></p>
                <div>
                    <h2 className='font-bold text-3xl'>Why Read Books?</h2>
                    <p className=''>Books open doors to new worlds. <br></br> knowledge and endless possibilities.</p>
                </div>
                <p className='text-3xl'><IoArrowRedoCircle /></p>
            </div>
            <div className='flex items-center gap-3 bg-purple-200 px-5 py-10 rounded-md shadow-sm'>
                <p className='text-purple-500 text-5xl'><MdOutlineGroups /></p>
                <div>
                    <h2 className='font-bold text-3xl text-purple-600'>Join Our Community</h2>
                    <p>Become a member and enjoy exclusive <br></br> benefits & discounts</p>
                    
                </div>
                <p className='text-3xl'><IoArrowRedoCircle /></p>
            </div>
        </div>
    );
};

export default Community;