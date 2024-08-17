"use client";
import { ShoppingCart } from 'lucide-react';
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

            <ul className='gap-7'>
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

                <Link href="/cart">
                    <ShoppingCart />
                </Link>
            </ul>
        </div>
    )
}
