'use client'
import { Button, Icon, Logo, Text } from '@/components/atoms'
import { SearchBox } from '@/components/molecules'
import useSearch from '@/hooks/useSearch'
import React, { useState } from 'react'

const MainLayoutHeader = () => {
    const [query, setQuery] = useState<string>('')
    const { data } = useSearch({ query })
    const dummySearchBoxContent: { value: number, label: string }[] = [
        { value: 1, label: 'Product 1' },
        { value: 2, label: 'Product 2' },
        { value: 3, label: 'Product 3' },
    ]

    return (
        <div className='flex items-center px-[75px] mt-7'>
            <div className='flex-[1] flex items-center'>
                <Logo />
            </div>

            <div className='flex-[3] flex flex-col gap-2'>
                <SearchBox<number>
                    className='rounded-[10px]'
                    data={dummySearchBoxContent}
                    value={query}
                    onClick={(val) => setQuery(val)}
                    onChange={(e) => setQuery(e.target.value)}
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