"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Banner from "@/components/Banner";
import Product from "@/components/Product";
import Shoes from "@/components/Shoes";
import { GetAllProducts } from "@/appwrite/functions/products";
import ProductSkeleton from "@/components/ProductSkeleton";

export default function Home() {

  const [products, setProducts] = useState<any>([])
  const [isloading, setIsloading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true)
        const resp = await GetAllProducts(10)

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
    <div className="p-5">

      <Banner />

      <div className="mt-10 max-w-5xl mx-auto">
        <h1>
          Products
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
            </ul>
          )
        }

        <div className="flex justify-center mt-6">
          <Link href='/categories' className="border py-2 px-3 border-custom-yellow text-custom-yellow hover:bg-custom-yellow hover:text-custom-gray-primary transition-all duration-300">
            Explore More
          </Link>
        </div>
      </div>

      <div className="mt-10 max-w-5xl mx-auto">
        <h1>
          Shop branded Shoes
        </h1>
        <Shoes />
      </div>
    </div>
  );
}
