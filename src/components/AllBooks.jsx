"use client"

import React, { useState } from 'react';
import { booksData } from './shared/data';
import BooksCard from './BooksCard';

const AllBooks = () => {
    const books=booksData();

    const [category,setCategory]=useState("All");
    const [search,setSearch]=useState("");

    const filteredBooks=books.filter(book=>{
        const matchCategory= category === "All" || book.category===category;
        const searchCategory=book.title.toLowerCase().includes(search.toLowerCase());

        return matchCategory && searchCategory;
    })
    return (
        <div className='w-3/4 mx-auto mb-10'>
            {/* search bar */}
            <div className='flex items-center justify-center gap-2'>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>

                <button className='btn btn-outline text-purple-400'>Search</button>
            </div>
            <h2 className='font-bold text-2xl mt-3'>All Books</h2>
            <div className='grid grid-cols-12 mt-5'>
                <div className='col-span-4'>
                    <h2 className='font-bold'>Category</h2>
                    <div className='flex flex-col gap-2 w-3/4 mx-auto mt-2'>
                        <button onClick={()=>setCategory("tech")} className='bg-slate-200 p-3 font-semibold cursor-pointer rounded hover:text-white hover:bg-purple-300 transition active:scale-90'>Tech</button>
                        <button onClick={()=>setCategory("story")} className='bg-slate-200 p-3 font-semibold cursor-pointer rounded hover:text-white hover:bg-purple-300 transition active:scale-90'>Story</button>
                        <button onClick={()=>setCategory("fiction")} className='bg-slate-200 p-3 font-semibold cursor-pointer rounded hover:text-white hover:bg-purple-300 transition active:scale-90'>Fiction</button>
                        <button onClick={()=>setCategory("science")} className='bg-slate-200 p-3 font-semibold cursor-pointer rounded hover:text-white hover:bg-purple-300 transition active:scale-90'>Science</button>
                        <button onClick={()=>setCategory("mystery")} className='bg-slate-200 p-3 font-semibold cursor-pointer rounded hover:text-white hover:bg-purple-300 transition active:scale-90'>Mystrey</button>
                    </div>
                </div>
                <div className='col-span-8 grid  sm:grid-cols-2 md:grid-cols-2 gap-4'>
                    {
                        filteredBooks.length>0?filteredBooks.map(book=><BooksCard key={book.id} book={book}></BooksCard>):<p className='font-semibold text-purple-500'>No Books Found</p>
                    }
                </div>

            </div>

        </div>
    );
};

export default AllBooks;