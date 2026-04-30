import React from 'react';
import { GiBookmarklet } from 'react-icons/gi';
import { GrCloudComputer } from 'react-icons/gr';
import { MdOutlineScience } from 'react-icons/md';

const Categories = () => {
    return (
        <div className='w-3/4 mx-auto my-5'>
            <h2 className='font-bold text-2xl'>Top Categories</h2>
            <div className='flex gap-4 flex-wrap sm:justify-around mt-3'>
                <div className='bg-slate-200 shadow-sm flex gap-3 p-5 rounded-md'>
                    <p className='text-3xl text-purple-600'><GiBookmarklet /></p>
                    <p className='font-bold text-2xl'>Story</p>
                </div>
                <div className='bg-slate-200 shadow-sm flex gap-3 p-5 rounded-md'>
                    <p className='text-3xl text-blue-600'><GrCloudComputer /></p>
                    <p className='font-bold text-2xl'>Tech</p>
                </div>
                <div className='bg-slate-200 shadow-sm flex gap-3 p-5 rounded-md'>
                    <p className='text-3xl text-green-600'><MdOutlineScience /></p>
                    <p className='font-bold text-2xl'>Science</p>
                </div>
            </div>
            
        </div>
    );
};

export default Categories;