import React from 'react';
import banner from '@/assets/banner.png'
import Image from 'next/image';

const Banners = () => {
    return (
        <div className='container mx-auto bg-purple-200 p-4 rounded-md mt-4 m-5 sm:flex justify-between items-center'>
            <div className='px-10 space-y-2'>
                <h2 className='text-4xl font-bold text-center'>Find Your Next Read</h2>
                <p className='text-sm font-semibold text-center'>Explore thousands of books across <br /> stories,technology & science</p>
                <p className='flex justify-center'><button className='btn btn-primary '>Browse Now</button></p>
            </div>
            <div>
                <Image src={banner} height={600} width={600} alt='books' className='mx-auto'></Image>
            </div>
            
        </div>
    );
};

export default Banners;