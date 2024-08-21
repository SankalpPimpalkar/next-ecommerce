"use client";

import Product from "@/components/Product";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CategoryProducts({ params }: any) {

    const [products, setProducts] = useState<any>([])

    useEffect(() => {
        (async () => {
            const resp = await axios.get(`https://api.escuelajs.co/api/v1/categories/${params.id}/products`)

            if (resp.data) {
                console.log(resp.data)
                setProducts(resp.data)
            }
        })()
    }, [])

    return (
        <div className='p-5'>
            <h1>
                {products && products[0]?.category?.name}
            </h1>

            <ul className="flex flex-wrap mt-6 gap-7">
                {
                    products?.slice(1).map((product: any) => (
                        <>
                            {
                                (product.images[0] || product.images[1] || product.images[2]) &&
                                <Product key={product.id} product={product} />
                            }
                        </>
                    ))
                }
            </ul>
        </div>
    )
}
