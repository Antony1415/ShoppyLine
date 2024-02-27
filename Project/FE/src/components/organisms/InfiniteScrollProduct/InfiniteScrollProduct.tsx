'use client'
import React, { useEffect, useRef } from 'react'
import { Product } from '@/utils/type';

export interface InfiniteScrollProductProps<T extends Product> {
    className?: string;
    data: T[];
    callback: () => void;
}

const InfiniteScrollProduct = <T extends Product>({ className, data, callback }: InfiniteScrollProductProps<T>): React.JSX.Element => {
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

    return (
        <div className={`${className} grid grid-cols-6 gap-x-6 gap-y-6`}>
            {data.map((product, index) => {
                if (data.length - 1 === index) {
                    return (
                        <div ref={lastElementRef} key={product.id} className='flex flex-col items-center gap-2'>
                            <div className='flex'>
                                <img src={product.images[0]} width={300} height={150} />
                            </div>
                            <div className='fex flex-ol'>
                                <h1>{product.title}</h1>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    )
                }
                return (
                    <div key={product.id} className='flex flex-col gap-2'>
                        <img className='w-full h-[200px] rounded-[10px]' src={product.images[0]} />

                        <div className='flex flex-col gap-1'>
                            <h1>{product.title}</h1>
                            <h2 className='text-red-600'>Rp. {product.price}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default InfiniteScrollProduct