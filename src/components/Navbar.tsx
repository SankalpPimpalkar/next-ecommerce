"use client";
import { useEffect, useState } from 'react';
import { CircleUser, Menu, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { getCurrentUser, logout } from '@/appwrite/functions/users';

const navLinks = [
    {
        name: 'All Categories',
        slug: '/categories'
    },
    {
        name: 'Electronics',
        slug: '/categories/Electronics'
    },
    {
        name: 'Clothes',
        slug: '/categories/Clothes'
    },
    {
        name: 'Miscellaneous',
        slug: '/categories/Miscellaneous'
    },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setuser] = useState<any>(null)
    const router = useRouter()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = async () => {
        await logout()
        setuser(null)
    }

    useEffect(() => {
        (async () => {
            const userData = await getCurrentUser()
            setuser(userData)
        })();
    }, [])

    return (
        <nav className='p-5 flex items-center justify-between relative'>
            <Link href='/'>
                <h1>
                    E commerce
                </h1>
            </Link>

            <div className='flex items-center gap-7'>
                <ul className='gap-7 hidden md:flex'>
                    {
                        navLinks.map((nav, index) => (
                            <li
                                className={`${pathname === nav.slug ? 'text-custom-yellow' : ''}`}
                                key={index}>
                                <Link href={nav.slug}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <Link href="/cart">
                    <ShoppingCart
                        width={25}
                        height={25}
                        className='text-custom-yellow' />
                </Link>

                {
                    user ? (
                        <CircleUser
                            width={25}
                            height={25}
                            onClick={() => router.push('/profile')}
                            className='text-custom-yellow'
                        />
                    ) : (
                        <Link
                            className='hidden sm:block bg-custom-yellow text-custom-gray-primary px-4 py-2 text-sm rounded font-semibold active:bg-custom-yellow/95'
                            href='/login'>
                            Login
                        </Link>
                    )
                }

                <button className='block md:hidden' onClick={toggleSidebar}>
                    {isSidebarOpen ? <X /> : <Menu />}
                </button>
            </div>

            <div
                id='sidebar'
                className={`bg-custom-gray-primary w-full h-full min-h-screen max-w-xs fixed top-0 right-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className='p-5'>
                    <button onClick={toggleSidebar}>
                        <X />
                    </button>
                    <div className='mt-10 flex flex-col h-full items-start justify-between'>
                        <ul>
                            {navLinks.map((nav, index) => (
                                <li
                                    className={`${pathname === nav.slug ? 'text-custom-yellow' : ''} mb-5`}
                                    key={index}
                                    onClick={toggleSidebar}
                                >
                                    <Link href={nav.slug}>
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {
                            user ? (
                                <button className='bg-custom-yellow text-custom-gray-primary w-full py-2 rounded font-semibold' onClick={handleLogout}>
                                    Logout
                                </button>
                            ) : (

                                <Link href='/login' className='bg-custom-yellow text-custom-gray-primary w-full py-2 rounded font-semibold text-center'>
                                    Login
                                </Link>
                            )
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
}
