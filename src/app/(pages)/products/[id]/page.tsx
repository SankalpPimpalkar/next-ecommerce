"use client";
import { GetProductById } from '@/appwrite/functions/products';
import ProductDetails from '@/components/ProductDetails';
import { useEffect, useState } from 'react';

export default function Product({ params }: any) {
    const [product, setProduct] = useState<any>(null)

    useEffect(() => {
        (async () => {
            const resp = await GetProductById(params.id)

            if (resp) {
                setProduct(resp)
            }
        })();
    }, [])

    return (
        <ProductDetails product={product} />
    )
}
