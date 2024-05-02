'use client'
import { ProductCarrousel } from '@/components/organisms'
import { Product } from '@/utils/type'
import React, { useEffect, useState } from 'react'

const HomeBestSellerProduct = (): React.JSX.Element => {
    const [product, setProduct] = useState<Product[][]>([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=20`)
            .then(res => res.json())
            .then(data => {
                const mapData = data.products.map(({ id, title, description, category, price, rating, images }: Product) => {
                    return {
                        id,
                        title,
                        description,
                        category,
                        price,
                        rating,
                        images
                    }
                })
                const array: Product[][] = Array.from({ length: 3 }, (_, index) => {
                    return mapData.slice(index * 7, (index + 1) * 7)
                })
                setProduct(array)
            });
    }, [])

    return (
        <div className='flex flex-col gap-5 bg-white py-3 rounded-[2px]'>
            <h1 className='font-semibold text-[25px] pb-2 px-4 border-b-black/50 border-b-[2px]'>Best Seller Product</h1>
            <ProductCarrousel data={product} />
        </div>
    )
}

export default HomeBestSellerProduct