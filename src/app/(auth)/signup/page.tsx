"use client"
import Link from 'next/link';
import React, { FormEvent, useState } from 'react';
import { createAccount } from '@/appwrite/functions/users';
import { useRouter } from "next/navigation";

export default function Signup() {

    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [isloading, setIsloading] = useState(false)
    const router = useRouter()

    function handleOnChange(e: any) {
        const { name, value } = e.target

        setformData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleOnSubmit(e: FormEvent) {
        e.preventDefault();
        try {
            setIsloading(true)
            const resp = await createAccount(formData)
            console.log(resp)
            router.push('/')

        } catch (error) {
            console.log(error)
        } finally {
            setIsloading(false)
        }
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-gray-950'>
            <div className='border border-gray-800 rounded-md w-full max-w-lg p-8 bg-custom-gray-primary shadow-lg flex flex-col'>
                <h1 className='text-2xl text-custom-yellow font-bold mb-6 text-start'>
                    {
                        isloading ? "Signing Up..." : "Signup"
                    }
                </h1>

                <form className='space-y-6' onSubmit={handleOnSubmit}>
                    <div className='flex flex-col items-start'>
                        <label htmlFor="name" className='text-custom-white mb-2'>Name</label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleOnChange}
                            placeholder='Enter your name'
                            className='w-full px-4 py-2 rounded-md bg-custom-gray-primary text-custom-white border border-custom-gray-secondary focus:outline-none focus:ring-2 focus:ring-custom-yellow'
                        />
                    </div>

                    <div className='flex flex-col items-start'>
                        <label htmlFor="email" className='text-custom-white mb-2'>Email</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleOnChange}
                            placeholder='Enter your email'
                            className='w-full px-4 py-2 rounded-md bg-custom-gray-primary text-custom-white border border-custom-gray-secondary focus:outline-none focus:ring-2 focus:ring-custom-yellow'
                        />
                    </div>

                    <div className='flex flex-col items-start'>
                        <label htmlFor="password" className='text-custom-white mb-2'>Password</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            value={formData.password}
                            onChange={handleOnChange}
                            placeholder='Enter your password'
                            className='w-full px-4 py-2 rounded-md bg-custom-gray-primary text-custom-white border border-custom-gray-secondary focus:outline-none focus:ring-2 focus:ring-custom-yellow'
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isloading}
                        className='w-full py-2 bg-custom-yellow text-custom-gray-primary font-semibold rounded-md hover:bg-yellow-500 transition duration-300 disabled:bg-yellow-500'
                    >
                        Sign Up
                    </button>
                </form>

                <Link className='mt-3 text-custom-yellow hover:text-yellow-500' href="/login">
                    Already have an account ?
                </Link>
            </div>
        </div>
    );
}
