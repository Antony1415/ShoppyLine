'use client'
import { Button, Logo, Text } from '@/components/atoms'
import { SearchBox } from '@/components/molecules'
import { useAppDispatch } from '@/redux-toolkit'
import { setShowModal } from '@/redux-toolkit/modal/modalSlice'
import React, { useState } from 'react'

const MainLayoutHeader = () => {
    const dispatch = useAppDispatch();

    const dummySearchBoxContent: { value: string, label: string }[] = [
        { value: 'Product 1', label: 'Product 1' },
        { value: 'Product 2', label: 'Product 2' },
        { value: 'Product 3', label: 'Product 3' },
    ]
    const [dummySearch, setDummySearch] = useState<{ value: string, label: string }[]>(dummySearchBoxContent)

    const onClickSearchProduct = (searchVal: string) => {
        const filterData = dummySearchBoxContent.filter((item) => {
            const value = item.value as String;

            return value.includes(searchVal);
        })

        setDummySearch(filterData)
    }

    const onSearchProduct = (searchVal: string) => {
        const filterData = dummySearchBoxContent.filter((item) => {
            const value = item.value as String;

            return value.includes(searchVal);
        })

        setDummySearch(filterData)
    }

    return (
        <div className='flex items-center px-[100px] py-5 sticky top-0 z-50 bg-white'>
            <Logo className='flex-[1]' />

            <div className='flex-[3] flex flex-col gap-2'>
                <SearchBox<string>
                    className='rounded-[10px]'
                    data={dummySearch}
                    onClick={(val) => onClickSearchProduct(val)}
                    onChange={(e) => onSearchProduct(e.target.value)}
                />

                <ul className='flex gap-5'>
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                </ul>
            </div>

            <div className='flex-[1] flex gap-5 h-full'>
                <Button className='ml-auto' onClick={() => { dispatch(setShowModal(true)) }}>
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