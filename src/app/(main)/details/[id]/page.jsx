"use client"
import Footer from '@/components/Footer';
import { booksData } from '@/components/shared/data';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { AiOutlineDatabase } from 'react-icons/ai';
import { toast } from 'react-toastify';



const BookDetails = () => {
    const params = useParams();
    const { id } = params;

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const router = useRouter();

    useEffect(() => {
        if (!user && !isPending) {
              toast.error("You must be Login to see Book Details");
              setTimeout(() => {
                 router.push("/login");
              }, 1000);
            
           
          

        }
    }, [user, isPending, router]);

    if (isPending) {
        return <p className='flex justify-center'><span className="loading loading-bars loading-xl"></span></p>
    }
    if (!user) {
        return null;
    }


    const books = booksData();
    const book = books.find(b => b.id === Number(id));

    return (
        <>
        <div className='w-3/4 mx-auto mt-6 mb-6'>

            <div className="md:card card-side bg-base-100 shadow-xl ">
                <figure className='mb-3 md:w-1/2'>
                    <Image src={book.image_url} width={300} height={100} alt='book image' className='object-cover'></Image>
                </figure>
                <div className="sm:card-body md:w-1/2">
                    <h2 className="card-title text-3xl mt-2">{book.title}</h2>
                    <p> by <span className='text-purple-500 mb-2'>{book.author}</span></p>
                    <div>
                        <p className='text-gray-400 font-semibold'>Available Copies</p>
                    </div>
                    <div className='mb-6'>
                        <p className='font-bold text-green-400 text-xl'>{book.available_quantity} Copies left</p>
                    </div>
                    <div>
                        <p className='font-bold text-xl flex items-center gap-1'><AiOutlineDatabase className='text-purple-500' />Description</p>
                        <p>{book.description}</p>
                    </div>

                    <div className="card-actions justify-end py-4 pr-2">
                        <button className="btn btn-primary">Borrow This Book</button>
                    </div>
                </div>
            </div>

        </div>
        <Footer></Footer>
        </>
    );
};

export default BookDetails;