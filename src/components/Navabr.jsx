'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/assets/logoo.png"
import { MdMenuBook } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

const Navabr = () => {

    const { data: session } = authClient.useSession();
    const user=session?.user;
    console.log(user.name)
    const pathName = usePathname();

     const NavLinks = (path, menuName) => (
        <li><Link href={path} className={`${pathName === path ? "text-purple-500 font-bold border-b-1 border-purple-500" : "font-semibold text-gray-600"}`}>{menuName}</Link></li>

    )

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {NavLinks("/", "Home")}
                            {NavLinks("/books", "All Books")}
                            {NavLinks("/profile", "Profile")}
                        </ul>
                    </div>
                    <div>
                        <Link href={"/"}><p className='font-bold text-purple-500 flex items-center gap-1 text-2xl'><MdMenuBook />BookNest</p></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks("/", "Home")}
                        {NavLinks("/books", "All Books")}
                        {NavLinks("/profile", "Profile")}
                    </ul>
                </div>
                <div className="navbar-end">
                    <h2>Hello,{user.name}</h2>
                    <a className="btn btn-outline text-purple-500">Logout</a>;
                </div>
            </div>
        </div>
    );
};

export default Navabr;