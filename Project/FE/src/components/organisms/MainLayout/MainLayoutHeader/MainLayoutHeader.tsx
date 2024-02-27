'use client'
import { Button, Logo, Text } from '@/components/atoms'
import { SearchBox } from '@/components/molecules'
import React, { useState } from 'react'

const MainLayoutHeader = () => {
    const dummySearchBoxContent: { value: string, label: string }[] = [
        { value: 'Product 1', label: 'Product 1' },
        { value: 'Product 2', label: 'Product 2' },
        { value: 'Product 3', label: 'Product 3' },
    ]

    return (
        <div className='flex items-center px-[100px] py-5 sticky top-0 z-50 bg-white'>
            <div className='flex-[1] flex items-center'>
                <Logo />
            </div>

            <div className='flex-[3] flex flex-col gap-2'>
                <SearchBox<string>
                    className='rounded-[10px]'
                    data={dummySearchBoxContent}
                    onClick={(val) => console.log("VALl", val)}
                    onChange={(e) => console.log("AA", e.target.value)}
                />

                <ul className='flex gap-5 relative '>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                </ul>
            </div>

            <div className='flex-[1] flex gap-5 items-start h-full'>
                <Button className='ml-auto' disabled={true}>
                    <Text type='span' text='MASUK' />
                </Button>
                <Button>
                    <Text type='span' text='DAFTAR' />
                </Button>
            </div>
        </div>
    )
}

export default MainLayoutHeader