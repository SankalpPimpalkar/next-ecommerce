import Link from 'next/link'
import React from 'react'

export default function Product(
    { product }: any
) {
    return (
        <Link href={`/products/${product.id}`} className="w-full sm:max-w-44 md:max-w-52 lg:max-w-56">
            <img
                className="w-full h-full object-contain rounded"
                src={product.images[0] || product.images[1] || product.images[2]} alt={product.title}
            />

            <h2 className="mt-4 text-custom-yellow">
                ${product.price}
            </h2>

            <h3 className="mt-1">
                {product.title}
            </h3>
        </Link>
    )
}
