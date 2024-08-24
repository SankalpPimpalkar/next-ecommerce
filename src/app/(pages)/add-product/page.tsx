"use client";

import { GetCategories } from "@/appwrite/functions/categories";
import { AddProductInDB } from "@/appwrite/functions/products";
import { useEffect, useState } from "react";

export default function AddProduct() {

    const [categories, setCategories] = useState<any>([])
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        image: null
    })
    const [isloading, setIsloading] = useState(false)

    const handleChange = (event: any) => {
        const { name, value, files } = event.target;
        if (name === "image") {
            setFormData(form => ({
                ...form,
                [name]: files ? files[0] : null
            }))
        } else {
            setFormData(form => ({
                ...form,
                [name]: value
            }))
        }
    }

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();
        if (
            formData.title.trim() &&
            formData.description.trim() &&
            formData.image &&
            formData.price.trim() &&
            formData.category.trim()
        ) {
            try {
                setIsloading(true)
                await AddProductInDB(formData)

            } finally {
                setIsloading(false)
            }
        }
    }

    useEffect(() => {
        (async () => {
            const categoryList = await GetCategories();
            setCategories(categoryList)
        })()
    }, [])


    return (
        <div className='p-5'>
            <h1 className='text-2xl'>
                Add Product
            </h1>

            <form onSubmit={handleFormSubmit} className='w-full max-w-xl mt-5 flex flex-col gap-5'>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className='w-full bg-custom-gray-secondary outline-none p-3 rounded'
                    placeholder='Title for Product'
                />

                <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className='w-full bg-custom-gray-secondary outline-none p-3 rounded'
                    placeholder='Product Price'
                />

                <textarea
                    className='w-full bg-custom-gray-secondary outline-none p-3 rounded'
                    rows={2}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder='Product Description'
                />

                <h1 className='mb-4'>
                    Select Product Category
                </h1>

                <div className="flex flex-wrap gap-2">
                    {
                        categories?.map((category: any) => (
                            <div key={category.$id} className="flex gap-2 ">
                                <label
                                    className={`px-3 py-2 border rounded-md font-medium cursor-pointer ${category.name === formData.category ? "bg-custom-yellow text-custom-gray-primary border-custom-yellow" : "bg-transparent text-custom-yellow border-custom-yellow"}`}
                                    htmlFor={category.name}>
                                    {category.name}
                                </label>

                                <input
                                    type="checkbox"
                                    className='hidden'
                                    id={category.name}
                                    onChange={() => setFormData({ ...formData, category: category.name })}
                                />
                            </div>
                        ))
                    }
                </div>

                <div>
                    <h1 className="mb-4">
                        Product Image
                    </h1>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className='w-full bg-custom-gray-secondary outline-none p-3 rounded file:bg-custom-yellow file:border-none file:px-2 file:py-1 file:rounded-md file:mr-6'
                        accept="image/*"
                    />
                </div>

                <button
                    disabled={isloading}
                    className="bg-custom-yellow text-custom-gray-primary py-2 px-5 rounded-md w-fit font-medium active:bg-custom-yellow/90 disabled:bg-custom-yellow/80"
                    type="submit">
                    {isloading ? "Adding Product" : "Add"}
                </button>
            </form >
        </div>
    )
}