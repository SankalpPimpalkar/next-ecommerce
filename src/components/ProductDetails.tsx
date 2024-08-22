import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ProductDetails(productId: string) {
    const [size, setSize] = useState("MD")
    const [product, setProduct] = useState<any>(null)


    function handleShoeSize(Productsize: string) {
        if (size !== Productsize) {
            setSize(Productsize)
        } else {
            setSize("")
        }
    }

    useEffect(() => {
        (async () => {
            const resp = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`)

            if (resp.data) {
                setProduct(resp.data)
            }
        })();
    }, [])

    return (
        <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
            <img
                className="w-full md:max-w-sm rounded-lg"
                src={product?.images[0]}
                alt={product?.title}
            />

            <div>
                <h1 className="text-3xl mt-2">
                    {product?.title}
                </h1>

                <p className="text-base mt-5 text-gray-300">
                    {product?.description}
                </p>

                <h3 className="mt-5 text-4xl text-custom-yellow">
                    ${product?.price}
                </h3>

                <div className="flex flex-col gap-6 mt-5 items-start">
                    <div className="flex items-center gap-2">
                        <span>
                            <input id="md" className="hidden peer" type="checkbox" onClick={() => handleShoeSize("MD")} />
                            <label htmlFor="md"
                                className={`${size == "MD" ? "bg-custom-yellow text-custom-gray-primary" : "border border-custom-yellow text-custom-yellow"}  font-semibold py-2 px-4 rounded cursor-pointer`}
                            >
                                MD
                            </label>
                        </span>
                        <span>
                            <input id="xl" className="hidden peer" type="checkbox" onClick={() => handleShoeSize("XL")} />
                            <label htmlFor="xl"
                                className={`${size == "XL" ? "bg-custom-yellow text-custom-gray-primary" : "border border-custom-yellow text-custom-yellow"}  font-semibold py-2 px-4 rounded cursor-pointer`}
                            >
                                XL
                            </label>
                        </span>
                        <span>
                            <input id="2xl" className="hidden peer" type="checkbox" onClick={() => handleShoeSize("2XL")} />
                            <label htmlFor="2xl"
                                className={`${size == "2XL" ? "bg-custom-yellow text-custom-gray-primary" : "border border-custom-yellow text-custom-yellow"}  font-semibold py-2 px-4 rounded cursor-pointer`}
                            >
                                2XL
                            </label>
                        </span>
                    </div>

                    <button className="bg-custom-yellow active:bg-custom-yellow/90 text-custom-gray-primary px-4 py-2 rounded font-semibold">
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    )
}
