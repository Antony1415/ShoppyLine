'use client'
import { InfiniteScrollProduct } from '@/components/organisms'
import React, { useEffect, useState } from 'react'

type Product = {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    images: string[];
}

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
    console.log("PR", product);

    return (
        <div className='h-fit flex flex-col gap-3'>
            <InfiniteScrollProduct<Product>
                data={product}
                callback={() => setPageNumber(prev => prev + 1)}
            />
        </div>
    )
}

export default HomeRecommendedProduct