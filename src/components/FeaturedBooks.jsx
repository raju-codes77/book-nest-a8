import Link from 'next/link';
import React from 'react';
import { booksData } from './shared/data';
import BooksCard from './BooksCard';

const FeaturedBooks =  () => {
    const books=booksData();
    const firstFourBooks=books.slice(0,4);
    
    return (
        <div className='w-3/4 mx-auto mt-5'>
            <div className='flex justify-between px-2'>
                <h2 className='text-xl font-bold'>Featured Books</h2>
                <Link href={"/books"} className='mr-10 text-purple-700 font-semibold'>View All</Link>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    firstFourBooks.map(book=> <BooksCard key={book.id} book={book}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedBooks;