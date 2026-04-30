import Image from 'next/image';
import React from 'react';


const BooksCard = ({ book }) => {
    return (
        <div>
            <div className="card bg-purple-100  shadow-sm">
                <figure className="px-10 pt-10">
                   <Image src={book.image_url}
                        alt="Shoes"
                        className="rounded-xl w-[200px]" width={200} height={200}></Image>
                </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title">{book.title}</h2>
                    <div className='flex justify-between'>
                        <h2>{book.author}</h2>
                        <h2>{book.category}</h2>
                    </div>
                    <div className="card-actions">
                        <button  className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;