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





const LoginPage = () => {
    const router=useRouter();

    const { register, handleSubmit } = useForm();
    const handleRegFunction = async (data) => {
        const {name,photo,email,password}=(data)

        const { data:res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password:password, // required
            image: photo,
            callbackURL: "/login"
        })
        if(error){
             toast.error(error.message);
        }
        if(res){
            toast.success("Registration successfully completed")
            router.push("/login")
        }
    }
    return (
        <div className=' min-h-screen flex items-center justify-center rounded-xl'>
            {/* login section */}
            <div className="bg-gray-100 flex shadow-lg p-5">
                {/* login form */}
                <div className="sm:w-1/2 flex items-center">
                    <form onSubmit={handleSubmit(handleRegFunction)} className="fieldset border-base-100 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend text-2xl font-bold text-purple-500">Register</legend>

                        <label className="label">Name</label>
                        <input type="text" {...register("name")} className="input rounded-xl" placeholder="Name" />

                        <label className="label">Photo Url</label>
                        <input type="text" {...register("photo")} className="input rounded-xl" placeholder="Url" />

                        <label className="label">Email</label>
                        <input type="email" {...register("email")} className="input rounded-xl" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" {...register("password", { required: true })} className="input rounded-xl" placeholder="Password" />

                        <button className="btn bg-purple-500 text-white mt-4">Register</button>

                        <div className="divider">OR</div>



                        <p className='text-center'> Have an account? <Link className='text-purple-500' href={"/login"}>Login</Link></p>

                    </form>
                </div>
                {/* image */}
                <div className="w-1/2 p-5 bg-purple-50 rounded-lg sm:block hidden ">
                    <Image className='rounded-2xl' src={img} height={600} width={600} alt='logo'></Image>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;