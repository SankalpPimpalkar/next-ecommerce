"use client"
import { GetCartItems, RemoveCartItem } from '@/appwrite/functions/cart';
import ProductSkeleton from '@/components/ProductSkeleton';
import Link from 'next/link';
import React, { FormEvent, useEffect, useState } from 'react'

export default function Cart() {

    const [products, setProducts] = useState<any>([])
    const [isloading, setIsloading] = useState(false)

    async function handleRemoveFromCart(event: FormEvent, product: any) {
        event.preventDefault();
        const filteredProducts = products.filter((item: any) => item.productId !== product.productId)

        await RemoveCartItem(product)
        setProducts(filteredProducts)
    }

    useEffect(() => {
        (async () => {
            try {
                setIsloading(true)
                const resp = await GetCartItems()

                if (resp) {
                    setProducts(resp)
                    console.log(resp)
                }
            } finally {
                setIsloading(false)
            }
        })();
    }, [])

    return (
        <div className='p-5'>
            <h1 className='text-custom-yellow text-2xl'>
                Your Cart
            </h1>

            <ul className="flex flex-wrap mt-6 gap-7">
                {
                    products?.map((product: any) => (
                        <Link key={product.$id} href={`/products/${product.productId}`} className="w-full sm:max-w-44 md:max-w-52 lg:max-w-56">
                            <img
                                className="w-full h-full object-contain rounded"
                                src={product.image} alt={product.title}
                            />

                            <h2 className="mt-4 text-custom-yellow">
                                ${product.price}
                            </h2>

                            <h3 className="mt-1">
                                {
                                    product.title.length > 25 &&
                                    String(product.title).slice(0, 25) + "..."
                                }
                            </h3>

                            <button onClick={(e) => handleRemoveFromCart(e, product)} className='bg-custom-yellow active:bg-custom-yellow/90 text-custom-gray-primary font-medium px-4 py-2 mt-4 rounded'>
                                Remove
                            </button>
                        </Link>
                    ))
                }
            </ul>

            {
                (!isloading && products.length == 0) && (
                    <p className='text-lg'>
                        Cart is empty.
                    </p>
                )
            }

            {
                isloading && (
                    <ul className="flex flex-wrap mt-6 gap-10">
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                    </ul>
                )
            }
        </div>
    )
}
