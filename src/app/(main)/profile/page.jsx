"use client"
import { authClient } from '@/lib/auth-client';
import { router } from 'better-auth/api';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify/unstyled';

const ProfilePage = () => {
    const { data: session,isPending } = authClient.useSession();
        const user=session?.user;

        const router=useRouter();

       useEffect(()=>{
        if(!user && !isPending){
            toast.error("You must be Login to see profile");
            router.push("/login");
         
        }
       },[user,isPending,router]);

       if(isPending){
        return <p>Loading...</p>
       }
       if(!user){
        return null;
       }
        
    return (
        <div>
            {/* {user?profile:route.push("/login")} */} profile
        </div>
    );
};

export default ProfilePage;