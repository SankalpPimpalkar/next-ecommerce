"use client";

import { GetProductsByCategoryName } from "@/appwrite/functions/products";
import Product from "@/components/Product";
import ProductSkeleton from "@/components/ProductSkeleton";
import { useEffect, useState } from "react";

export default function CategoryProducts({ params }: any) {

    const [products, setProducts] = useState<any>([])
    const [isloading, setIsloading] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                setIsloading(true)
                const resp = await GetProductsByCategoryName(params.name)

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
                {params.name}
            </h1>

            <ul className="flex flex-wrap mt-6 gap-7">
                {
                    products?.map((product: any) => (
                        <Product key={product.id} product={product} />
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
                    </ul>
                )
            }

            {
                (products.length == 0 && !isloading) && (
                    <h4 className="text-custom-yellow">
                        No products of {params.name} found
                    </h4>
                )
            }
        </div>
    )
}
