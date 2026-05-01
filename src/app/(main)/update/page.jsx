"use client";

import Image from 'next/image';
import React from 'react';
import img from '@/assets/loginLogo.png'
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';



const UpdatePage = () => {
    const router = useRouter();

    const { register, handleSubmit } = useForm();
    const handleUpdateFunction = async (data) => {
        const { name, photo } = (data)

        const { data: res, error } = await authClient.updateUser({
            image: data.photo,
            name: data.name,
        })
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success("Information Update successfully ")
            router.push("/profile")
        }
    }
    return (
        <div>
            <div className=' min-h-screen flex items-center justify-center rounded-xl'>
                {/* login section */}
                <div className="bg-gray-100 flex shadow-lg p-5">
                    {/* login form */}
                    <div className="sm:w-1/2 flex items-center">
                        <form onSubmit={handleSubmit(handleUpdateFunction)} className="fieldset border-base-100 rounded-box w-xs border p-4">
                            <legend className="fieldset-legend text-2xl font-bold text-purple-500">Update Your Information</legend>

                            <label className="label">New Name</label>
                            <input type="text" {...register("name")} className="input rounded-xl" placeholder="Name" />

                            <label className="label">New Photo Url</label>
                            <input type="text" {...register("photo")} className="input rounded-xl" placeholder="Photo Url" />



                            <button className="btn bg-purple-500 text-white mt-4">Update</button>



                        </form>
                    </div>
                    {/* image */}
                    <div className="w-1/2 p-5 bg-purple-50 rounded-lg sm:block hidden ">
                        <Image className='rounded-2xl' src={img} height={600} width={600} alt='logo'></Image>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdatePage;