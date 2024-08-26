import { AddCartItem } from '@/appwrite/functions/cart'
import Link from 'next/link'
import React, { FormEvent } from 'react'

export default function Product(
    { product }: any
) {

    async function handleAddToCart(event: FormEvent) {

        event.preventDefault()
        await AddCartItem(product)
    }

    return (
        <Link href={`/products/${product.$id}`} className="w-full sm:max-w-44 md:max-w-52 lg:max-w-56">
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

            <button onClick={handleAddToCart} className='bg-custom-yellow active:bg-custom-yellow/90 text-custom-gray-primary font-medium px-4 py-2 mt-4 rounded'>
                Add to Cart
            </button>
        </Link>
    )
}
