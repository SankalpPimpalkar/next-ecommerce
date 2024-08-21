"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Banner from "@/components/Banner";
import Product from "@/components/Product";
import Shoes from "@/components/Shoes";

export default function Home() {

  const [products, setProducts] = useState<any>([])

  useEffect(() => {
    (async () => {
      const resp = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=10')

      if (resp.data) {
        setProducts(resp.data)
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
            products?.slice(1).map((product: any) => (
              <Product key={product.id} product={product} />
            ))
          }
        </ul>

        <div className="flex justify-center mt-6">
          <Link href='/category' className="border py-2 px-3 border-custom-yellow text-custom-yellow hover:bg-custom-yellow hover:text-custom-gray-primary transition-all duration-300">
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
