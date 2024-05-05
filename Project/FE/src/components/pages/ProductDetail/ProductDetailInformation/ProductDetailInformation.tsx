'use client'
import { Button, Text } from '@/components/atoms';
import { QuantitySelector } from '@/components/molecules';
import { Product } from '@/utils/type';
import React, { useState } from 'react'

export interface ProductDetailInformationProps {
  product: Product;
}

const ProductDetailInformation = ({ product }: ProductDetailInformationProps): React.JSX.Element => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className='flex-[6] flex flex-col gap-7'>
      <div className='flex flex-col'>
        <Text className='font-bold text-[30px]' type='h1' text={product.title} />
        <Text className='font-semibold text-[24px] text-red-600 border-b-[1px] border-black/30 pb-3' type='h2' text={`Rp. ${product.price.toString()}`} />
      </div>

      <div className='flex flex-col gap-2'>
        <Text className='text-[18px]' type='p' text={product.description} />
        <Text className='text-[18px]' type='p' text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, autem earum, omnis vitae adipisci officia itaque quam reprehenderit iste pariatur nesciunt nihil error tempore eveniet sit necessitatibus repellat. Magni, ex! Non eos, porro eum ipsa corrupti placeat laborum, maiores tempore nemo delectus blanditiis adipisci quae nulla tenetur esse expedita ab!'} />
        <Text className='text-[18px]' type='p' text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, autem earum, omnis vitae adipisci officia itaque quam reprehenderit iste pariatur nesciunt nihil error tempore eveniet sit necessitatibus repellat. Magni, ex! Non eos, porro eum ipsa corrupti placeat laborum, maiores tempore nemo delectus blanditiis adipisci quae nulla tenetur esse expedita ab!'} />
      </div>

      <div className='flex gap-5 items-center'>
        <Text className='text-[18px]' type='p' text={'Kuantitas'} />
        <QuantitySelector quantity={quantity} onChange={(val) => setQuantity(val)} />
      </div>

      <Button className='w-fit mt-auto bg-[#d41830] border-none py-4 px-9' onClick={() => { alert(`Buy: ${quantity}`) }}>
        <Text className='text-white' text='Beli Sekarang' />
      </Button>
    </div>
  )
}

export default ProductDetailInformation