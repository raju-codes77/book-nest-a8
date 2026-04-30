import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GiBookmarklet } from 'react-icons/gi';
import { IoMdCall } from 'react-icons/io';
import { MdAttachEmail, MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className='bg-primary p-10'>
            <div className='sm:flex space-y-8 justify-around'>
                <div className='text-white space-y-3 '>

                    <p className='flex gap-1 items-center text-center text-white font-bold text-3xl'><GiBookmarklet /> BookNest</p>
                    <p>Your next adventure starts here</p>
                    <div className="flex items-center gap-4 ">

                        {/* Facebook */}
                        <a href="#" className="p-3 rounded-full bg-[#F8FAFC] hover:bg-[#4F46E5] text-[#4F46E5] hover:text-white transition">
                            <FaFacebookF size={18} />
                        </a>

                        {/* Twitter */}
                        <a href="#" className="p-3 rounded-full bg-[#F8FAFC] hover:bg-[#4F46E5] text-[#4F46E5] hover:text-white transition">
                            <FaTwitter size={18} />
                        </a>

                        {/* Instagram */}
                        <a href="#" className="p-3 rounded-full bg-[#F8FAFC] hover:bg-[#4F46E5] text-[#4F46E5] hover:text-white transition">
                            <FaInstagram size={18} />
                        </a>

                        {/* LinkedIn */}
                        <a href="#" className="p-3 rounded-full bg-[#F8FAFC] hover:bg-[#4F46E5] text-[#4F46E5] hover:text-white transition">
                            <FaLinkedinIn size={18} />
                        </a>

                        {/* YouTube */}
                        <a href="#" className="p-3 rounded-full bg-[#F8FAFC] hover:bg-red-500 text-[#4F46E5] hover:text-white transition">
                            <FaYoutube size={18} />
                        </a>

                    </div>

                </div>

                <div className='text-white'>
                    <h2 className='text-white text-2xl'>Quick Links</h2>
                   <p> <Link href={"/"}>Home</Link></p>
                    <p><Link href={"/books"}>All Books</Link></p>
                    <p><Link href={"/profile"}>Profile</Link></p>
                </div>

                <div className='text-white'>
                  <h2 className='text-2xl'>Contact Us</h2>
                    <p className='flex gap-1 items-center'><MdAttachEmail />support@booknest.com</p>
                    <p className='flex gap-1 items-center'><IoMdCall />+1 234 567 890</p>
                </div>


            </div>
            <div className="divider"></div>

            <div>
                <p className='text-sm text-center text-white'>&copy; 2026 BookNest.All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;