"use client";
import { getCurrentUser } from '@/appwrite/functions/users';
import React, { useEffect, useState } from 'react'

export default function ProfilePage() {

    const [user, setuser] = useState<any>(null)

    useEffect(() => {
        (async () => {
            const userData = await getCurrentUser()
            setuser(userData)
            console.log(userData)
        })();
    }, [])

    return (
        <div className='w-full h-full min-h-screen max-w-6xl mx-auto p-8'>
            <h1 className='text-2xl'>User Profile</h1>

            <div className='mt-10'>
                <div className='flex items-start justify-between flex-col sm:flex-row sm:items-center gap-8'>
                    <span className='flex items-center gap-5 sm:gap-10'>
                        <img
                            className='max-w-20 md:max-w-40 max-h-20 md:max-h-40 rounded-full'
                            src={user?.avatar || './profile-placeholder.png'}
                            alt={user?.name}
                        />

                        <span>
                            <h2 className='text-xl sm:text-2xl md:text-3xl'>
                                {user?.name}
                            </h2>
                            <p className='text-base sm:text-lg md:text-xl mt-1 md:mt-2 text-custom-yellow'>
                                {user?.email}
                            </p>
                        </span>
                    </span>

                    <button className='bg-custom-yellow text-custom-gray-primary px-4 py-2 rounded font-medium hover:bg-custom-yellow/90 active:bg-custom-yellow/80 w-full sm:w-fit'>
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    )
}
