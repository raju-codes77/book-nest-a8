"use client";

import Image from 'next/image';
import React from 'react';
import img from '@/assets/loginLogo.png'
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useForm } from 'react-hook-form';




const LoginPage = () => {

    const {register,handleSubmit}=useForm();
    const handleLoginFunction=(data)=>{
        console.log(data)
    }
    return (
        <div className=' min-h-screen flex items-center justify-center rounded-xl'>
            {/* login section */}
            <div className="bg-gray-100 flex shadow-lg p-5">
                {/* login form */}
                <div className="sm:w-1/2 flex items-center">
                    <form onSubmit={handleSubmit(handleLoginFunction)} className="fieldset border-base-100 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend text-2xl font-bold text-purple-500">Login</legend>

                        <label className="label">Email</label>
                        <input type="email" {...register("email")} className="input rounded-xl" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" {...register("password",{required:true})} className="input rounded-xl" placeholder="Password" />

                        <button className="btn bg-purple-500 text-white mt-4">Login</button>

                          <div className="divider">OR</div>

                          <button className='bg-white  py-2 w-full rounded-xl flex items-center gap-4 justify-center text-xl'><FcGoogle />Login With Google</button>

                          <p className='text-center'>Don't have an account? <Link className='text-purple-500' href={"/register"}>Register</Link></p>

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