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
                const array: Product[][] = Array.from({ length: 4 }, (_, index) => {
                    return mapData.slice(index * 6, (index + 1) * 6)
                })
                setProduct(array)
            });
    }, [])

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-[25px]'>Best Seller Product</h1>
            <ProductCarrousel data={product} />
        </div>
    )
}

export default HomeBestSellerProduct