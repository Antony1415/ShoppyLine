'use client'
import { Icon, Input } from '@/components/atoms'
import React, { useEffect, useState } from 'react'

export interface QuantitySelectorProps {
    quantity: number,
    onChange: (quantity: number) => void
}

const QuantitySelector = ({ quantity, onChange }: QuantitySelectorProps): React.JSX.Element => {

    const incrementQuantity = () => {
        onChange(quantity + 1)
    }

    const decrementQuantity = () => {
        if (quantity <= 1) return onChange(1)
        return onChange(quantity - 1)
    }

    return (
        <div className='flex h-full'>
            <Icon
                className='rotate-180 border-[1px] border-l-[0px] border-black/35 px-3'
                size={{ width: 10, height: 10 }}
                src='/assets/svg/minus_icon.svg'
                onClick={decrementQuantity}
            />

            <Input
                className='max-w-[75px] px-1 h-full text-center rounded-none border-black/35 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                value={quantity}
                type='number'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = e.target;
                    if (isNaN(parseInt(value))) return onChange(1)
                    onChange(parseInt(e.target.value))
                }}
            />

            <Icon
                className='border-[1px] border-black/35 px-3 border-l-[0px]'
                size={{ width: 10, height: 10 }}
                src='/assets/svg/plus_icon.svg'
                onClick={incrementQuantity}
            />
        </div>
    )
}

export default QuantitySelector