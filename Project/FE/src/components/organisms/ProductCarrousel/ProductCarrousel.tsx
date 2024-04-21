import { ImageCarrousel } from '@/components/atoms';
import { Product } from '@/utils/type';
import React from 'react'

export interface ProductCarrouselProps {
    data: Product[][];
}

const ProductCarrousel = ({ data }: ProductCarrouselProps): React.JSX.Element => {
    const renderCarrouselElement = () => {
        return data.map((products: Product[], index) => {
            return (
                <div className='grid grid-cols-6 h-full gap-x-5' key={index}>
                    {products.map((product: Product) => {
                        return (
                            <div className='flex flex-col h-full' key={product.id}>
                                <img className='w-full h-[150px] rounded-[10px]' src={product.images[0]} />
                                <div className='flex flex-col gap-1'>
                                    <h1>{product.title}</h1>
                                    <p className='text-red-600'>Rp. {product.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        })
    }

    return (
        <ImageCarrousel data={renderCarrouselElement()} />
    )
}

export default ProductCarrousel