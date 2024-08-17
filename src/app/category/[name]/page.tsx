"use client";

export default function CategoryProducts({ params }: any) {

    console.log(params)

    return (
        <div className="p-5">
            {params.name}
        </div>
    )
}
