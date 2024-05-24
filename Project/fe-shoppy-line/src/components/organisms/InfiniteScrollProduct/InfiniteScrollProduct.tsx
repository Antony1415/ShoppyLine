'use client'
import React, { useEffect, useRef } from 'react'
import { Product } from '@/utils/type';
import { useRouter } from 'next/navigation'

export interface InfiniteScrollProductProps<T extends Product> {
    className?: string;
    data: T[];
    callback: () => void;
}

const InfiniteScrollProduct = <T extends Product>({ className, data, callback }: InfiniteScrollProductProps<T>): React.JSX.Element => {
    const router = useRouter()
    const lastElementRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (lastElementRef.current) {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    callback && callback()
                }
            }, { rootMargin: '250px' })
            observer.observe((lastElementRef.current as unknown) as Element)

            return () => observer.disconnect()
        }
    }, [data])

    const onClickProduct = (productId: string) => {
        router.push(`/product/${productId}`)
    }

    return (
        <div className={`${className} grid grid-cols-6 gap-x-6 gap-y-6`}>
            {data.map((product, index) => {
                if (data.length - 1 === index) {
                    return (
                        <div ref={lastElementRef} key={product.id} onClick={() => onClickProduct(product.id)} className='flex flex-col items-center gap-2 bg-white rounded-[5px] overflow-hidden cursor-pointer'>
                            <div className='flex'>
                                <img className='w-full h-[150px]' src={product.images[0]} />
                            </div>
                            <div className='fex flex-col px-3 pb-2'>
                                <h1 className='line-clamp-2 font-semibold'>{product.title}</h1>
                                <h2 className='text-red-600'>Rp. {product.price}</h2>
                            </div>
                        </div>
                    )
                }
                return (
                    <div key={product.id} onClick={() => onClickProduct(product.id)} className='flex flex-col gap-2 bg-white rounded-[5px] overflow-hidden cursor-pointer'>
                        <img className='w-full h-[150px]' src={product.images[0]} />

                        <div className='flex flex-col gap-1 px-3 pb-2'>
                            <h1 className='line-clamp-2 font-semibold'>{product.title}</h1>
                            <h2 className='text-red-600'>Rp. {product.price}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InfiniteScrollProduct