import React from 'react'

export default function ProductSkeleton() {
    return (
        <div className="w-full sm:max-w-44 md:max-w-52 lg:max-w-56 animate-pulse">
            <div className="w-full h-48 bg-gray-300 rounded"></div>
            <div className="mt-4 w-16 h-6 bg-gray-300 rounded"></div>
            <div className="mt-2 h-4 bg-gray-300 rounded"></div>
        </div>
    )
}
