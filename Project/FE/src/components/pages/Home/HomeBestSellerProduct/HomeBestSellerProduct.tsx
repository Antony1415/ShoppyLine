'use client'
import { ProductCarrousel } from '@/components/organisms'
import { Product } from '@/utils/type'
import React from 'react'

const HomeBestSellerProduct = ({ data }: { data: Product[][] }): React.JSX.Element => {
    return (
        <div className='flex flex-col gap-5 bg-white py-3 rounded-[2px]'>
            <h1 className='font-semibold text-[25px] pb-2 px-4 border-b-black/50 border-b-[2px]'>Best Seller Product</h1>
            <ProductCarrousel data={data} />
        </div>
    )
}

export default HomeBestSellerProduct