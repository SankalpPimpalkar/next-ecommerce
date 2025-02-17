import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Shoes() {
    const [shoeSize, setshoeSize] = useState("MD")
    const [productShoes, setProductShoes] = useState<any>(null)


    function handleShoeSize(size: string) {
        if (shoeSize !== size) {
            setshoeSize(size)
        } else {
            setshoeSize("")
        }
    }

    useEffect(() => {
        (async () => {
            const resp = await axios.get('https://api.escuelajs.co/api/v1/products/?title=Shoes')

            if (resp.data) {
                setProductShoes(resp.data[0])
            }
        })();
    }, [])

    return (
        <div className="mt-6 flex flex-col md:flex-row gap-6 items-start">
            <img
                className="w-full md:max-w-sm rounded-lg"
                src={productShoes?.images[0]}
                alt={productShoes?.title}
            />

            <div>
                <h1 className="text-3xl mt-2">
                    {productShoes?.title}
                </h1>

                <p className="text-base mt-5 text-gray-300">
                    {productShoes?.description}
                </p>

                <h3 className="mt-5 text-4xl text-custom-yellow">
                    ${productShoes?.price}
                </h3>

                <div className="flex flex-col gap-6 mt-5 items-start">
                    <div className="flex items-center gap-2">
                        <span>
                            <input id="md" className="hidden peer" type="checkbox" onClick={() => handleShoeSize("MD")} />
                            <label htmlFor="md"
                                className={`${shoeSize == "MD" ? "bg-custom-yellow text-custom-gray-primary" : "border border-custom-yellow text-custom-yellow"}  font-semibold py-2 px-4 rounded cursor-pointer`}
                            >
                                MD
                            </label>
                        </span>
                        <span>
                            <input id="xl" className="hidden peer" type="checkbox" onClick={() => handleShoeSize("XL")} />
                            <label htmlFor="xl"
                                className={`${shoeSize == "XL" ? "bg-custom-yellow text-custom-gray-primary" : "border border-custom-yellow text-custom-yellow"}  font-semibold py-2 px-4 rounded cursor-pointer`}
                            >
                                XL
                            </label>
                        </span>
                        <span>
                            <input id="2xl" className="hidden peer" type="checkbox" onClick={() => handleShoeSize("2XL")} />
                            <label htmlFor="2xl"
                                className={`${shoeSize == "2XL" ? "bg-custom-yellow text-custom-gray-primary" : "border border-custom-yellow text-custom-yellow"}  font-semibold py-2 px-4 rounded cursor-pointer`}
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
