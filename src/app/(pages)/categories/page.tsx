"use client";
import { useEffect, useState } from 'react'
import Product from '@/components/Product'
import axios from 'axios'
import { GetAllProducts } from '@/appwrite/functions/products';
import ProductSkeleton from '@/components/ProductSkeleton';

export default function AllCategories() {

    const [products, setProducts] = useState<any>([])
    const [isloading, setIsloading] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setIsloading(true)
                const resp = await GetAllProducts()

                if (resp) {
                    setProducts(resp)
                }
            } finally {
                setIsloading(false)
            }
        })()
    }, [])

    return (
        <div className='p-5'>
            <h1>
                All Categories
            </h1>

            <ul className="flex flex-wrap mt-6 gap-7">
                {
                    products?.map((product: any) => (
                        <Product key={product.$id} product={product} />
                    ))
                }
            </ul>

            {
                isloading && (
                    <ul className="flex flex-wrap mt-6 gap-10">
                        <ProductSkeleton />
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
