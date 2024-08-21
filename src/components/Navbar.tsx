"use client";
import { useEffect, useState } from 'react';
import { CircleUser, Menu, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { getCurrentUser } from '@/appwrite/functions/users';

const navLinks = [
    {
        name: 'All Categories',
        slug: '/categories'
    },
    {
        name: 'Electronics',
        slug: '/categories/2'
    },
    {
        name: 'Clothes',
        slug: '/categories/1'
    },
    {
        name: 'Miscellaneous',
        slug: '/categories/5'
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

    useEffect(() => {
        (async () => {
            const userData = await getCurrentUser()
            setuser(userData)
            console.log(userData)
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
                <ul className='gap-7 hidden sm:flex'>
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
                    <ShoppingCart className='text-custom-yellow' />
                </Link>

                {
                    user && (
                        <CircleUser
                            onClick={() => router.push('/profile')}
                            className='text-custom-yellow'
                        />
                    )
                }

                <button className='block sm:hidden' onClick={toggleSidebar}>
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
                    <ul className='mt-10'>
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
                </div>
            </div>
        </nav>
    );
}
