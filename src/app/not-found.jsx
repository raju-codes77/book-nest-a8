import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
            
            <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md w-full">
                
                {/* 404 */}
                <h1 className="text-7xl font-extrabold text-[#4F46E5]">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-3 text-2xl font-semibold text-gray-800">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mt-2 text-[#6B7280]">
                    Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-3">
                    
                    {/* Go Home */}
                    <Link
                        href="/"
                        className="px-6 py-2 rounded-lg bg-[#4F46E5] text-white hover:bg-[#312E81] transition"
                    >
                        Go Home
                    </Link>

                    {/* Back */}
                    <Link
                        href="/"
                        className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                        Back
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default NotFoundPage;