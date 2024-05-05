import { ImageCarrousel } from '@/components/atoms';
import { Product } from '@/utils/type';
import React from 'react'
import { useRouter } from 'next/navigation';

export interface ProductCarrouselProps {
    data: Product[][];
}

const ProductCarrousel = ({ data }: ProductCarrouselProps): React.JSX.Element => {
    const router = useRouter();

    const renderCarrouselElement = () => {
        const onClickProduct = (productId: string) => {
            router.push(`/product/${productId}`)
        }

        return data.map((products: Product[], index) => {
            return (
                <div className='grid grid-cols-7 h-full gap-x-5 px-4' key={index}>
                    {products.map((product: Product) => {
                        return (
                            <div className='flex flex-col h-full gap-2 rounded-[10px] cursor-pointer' key={product.id} onClick={() => onClickProduct(product.id)}>
                                <img className='w-full h-[150px] rounded-[10px]' src={product.images[0]} />
                                <div className='flex flex-col gap-1 px-3 pb-2'>
                                    <h1 className='line-clamp-2 font-semibold'>{product.title}</h1>
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