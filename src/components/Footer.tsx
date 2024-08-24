import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <div className='p-5 mt-5 border-t border-custom-yellow text-white'>
            <h1 className='mt-5 text-2xl font-bold text-start'>
                E-commerce Store
            </h1>

            <div className='w-full flex flex-wrap gap-10 items-start justify-between mt-5'>
                <div className='mb-5 md:mb-0'>
                    <h2 className='text-lg font-semibold mb-2'>
                        Quick Links
                    </h2>
                    <ul className='flex flex-col items-start gap-2'>
                        <li>
                            <Link href="/" className='hover:text-custom-yellow'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/categories" className='hover:text-custom-yellow'>
                                All Categories
                            </Link>
                        </li>
                        <li>
                            <Link href="/add-product" className='hover:text-custom-yellow'>
                                Add your product
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart" className='hover:text-custom-yellow'>
                                My Cart
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className='mb-5 md:mb-0'>
                    <h2 className='text-lg font-semibold mb-2'>
                        Customer Service
                    </h2>
                    <ul className='flex flex-col items-start gap-2'>
                        <li>
                            <a href="#" className='hover:text-custom-yellow'>
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-custom-yellow'>
                                Shipping & Returns
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-custom-yellow'>
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-custom-yellow'>
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-lg font-semibold mb-2'>
                        Contact Us
                    </h2>
                    <p>
                        Email:
                        <a href="#" className='hover:text-custom-yellow ml-1'>
                            fake@ecommerce.com
                        </a>
                    </p>
                    <p>
                        Phone:
                        <a href="tel:+1234567890" className='hover:text-custom-yellow ml-1'>
                            +123 456 7890
                        </a>
                    </p>
                    <div className='flex mt-3 space-x-4'>
                        <a href="#" className='hover:text-custom-yellow'>
                            Facebook
                        </a>
                        <a href="#" className='hover:text-custom-yellow'>
                            Twitter
                        </a>
                        <a href="https://www.instagram.com/i.am.sankalp.23/" target='_blank' className='hover:text-custom-yellow'>
                            Instagram
                        </a>
                    </div>
                </div>
            </div>

            <div className='mt-10 text-center border-t border-gray-700 pt-5'>
                <p className='text-sm'>© 2024 E-commerce Store. All Rights Reserved.</p>
            </div>
        </div>
    );
}
