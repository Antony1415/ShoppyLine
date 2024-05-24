'use client'
import { InfiniteScrollProduct } from '@/components/organisms'
import { Product } from '@/utils/type'
import React, { useEffect, useState } from 'react'

const HomeRecommendedProduct = (): React.JSX.Element => {
    const [pageNumber, setPageNumber] = useState(0)
    const [product, setProduct] = useState<Product[]>([])

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=10&skip=${10 * pageNumber}`)
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
                setProduct((prev: Product[]) => [...prev, ...mapData])
            });

    }, [pageNumber])

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-[25px] bg-white p-2 px-4 border-b-black/50 border-b-[1px]'>Recommended For You</h1>
            <InfiniteScrollProduct<Product>
                className={'px-4'}
                data={product}
                callback={() => setPageNumber(prev => prev + 1)}
            />
        </div>
    )
}

export default HomeRecommendedProduct