import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaStar } from 'react-icons/fa';

const MarqueePage = () => {
    const newArrivals = [
        {
            id: 1,
            name: "Atomic Habits",
            discount: "20% OFF for Members"
        },
        {
            id: 2,
            name: "The Psychology of Money",
            discount: "15% OFF for Members"
        },
        {
            id: 3,
            name: "Deep Work",
            discount: "25% OFF for Members"
        },
        {
            id: 4,
            name: "Ikigai",
            discount: "18% OFF for Members"
        }
    ];


    return (
        <div className='flex bg-purple-100 container mx-auto' >
            <p className='p-4 font-bold btn btn-error text-white bg-red'><FaStar />New Arrivals</p>
            <Marquee pauseOnHover gradient={false} >
                {newArrivals.map(arrival => {
                return <div key={arrival.id}>
                    <span>{arrival.name}</span>&nbsp;&nbsp; &nbsp;&nbsp;
                    <span>{arrival.discount}</span> &nbsp;&nbsp; || &nbsp;&nbsp;
                </div>
})};
            </Marquee>
        </div>
    );
};

export default MarqueePage;