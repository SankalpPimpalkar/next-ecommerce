"use client";
import { Menu, ShoppingCart } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    {
        name: 'All Categories',
        slug: '/category'
    },
    {
        name: 'Electronics',
        slug: '/category/electronics'
    },
    {
        name: 'Clothes',
        slug: '/category/clothes'
    },
    {
        name: 'Furniture',
        slug: '/category/furniture'
    },
]

export default function Navbar() {

    const pathname = usePathname()

    return (
        <div className='p-5 flex items-center justify-between'>
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
                                className={`${pathname === nav.slug && 'text-custom-yellow'}`}
                                key={index}>
                                <Link href={nav.slug}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                <button className='block sm:hidden'>
                    <Menu />
                </button>

                <Link href="/cart">
                    <ShoppingCart />
                </Link>
            </div>
        </div>
    )
}
