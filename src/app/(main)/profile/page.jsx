"use client"
import Footer from '@/components/Footer';
import { authClient } from '@/lib/auth-client';
import { router } from 'better-auth/api';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify/unstyled';

const ProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const router = useRouter();

    useEffect(() => {
        if (!user && !isPending) {
            toast.error("You must be Login to see profile");
            router.push("/login");

        }
    }, [user, isPending, router]);

    if (isPending) {
        return <p className='flex justify-center'><span className="loading loading-ball loading-xl"></span></p>
    }
    if (!user) {
        return null;
    }
    console.log(user)

    return (
        <>
        <div className='flex justify-center mt-6 mb-8'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                   <Image src={user.image} width={200} height={100} alt='use image' className='rounded-full'></Image>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: <span className='text-purple-700'>{user.name}</span></h2>
                    <p className='font-semibold'>Email: <span  className='text-purple-700'>{user.email}</span></p>
                    <div className="card-actions">
                        <Link href={"/update"} className="btn btn-primary active:scale-90">Update Your Information</Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default ProfilePage;