"use client"
import React, { useMemo, useState } from 'react'
import { Table } from '@/components/molecules'
import { dummyBody, dummyHead } from '@/components/molecules/Table/DummyTable'
import { Button, InputSearch, Text } from '@/components/atoms'
import Image from 'next/image'
import { handleSearch } from '@/utils/func'

const AdminProductContent = () => {
    const [searchProduct, setSearchProduct] = useState<string>('');

    // frontend handle search feature. if backend, just hit an API and get the filtered data.
    const dummyProductBody = useMemo(() => {
        if (searchProduct) {
            return dummyBody.filter((item) => handleSearch<string, string>(item.name, searchProduct))
        }
        return dummyBody
    }, [searchProduct])

    return (
        <div className='flex flex-col h-full w-full gap-6'>
            <div className='flex gap-16'>
                <div className='flex-[2] flex items-end'>
                    <InputSearch className='flex-1' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchProduct(e.target.value)} />
                </div>

                <div className='flex-[3] flex gap-10'>
                    <Button className='px-6 py-[15px] gap-5 ml-auto' onClick={() => alert("Add Product!")}>
                        <Text text='Add Product' className='text-[18px] font-semibold' />
                        <Image alt='' src={'/assets/svg/create_plus_icon.svg'} width={25} height={25} />
                    </Button>

                    <Button className='px-6 py-[15px] gap-5' onClick={() => alert("Add Product!")}>
                        <Text text='Add Product' className='text-[18px] font-semibold' />
                        <Image alt='' src={'/assets/svg/create_plus_icon.svg'} width={25} height={25} />
                    </Button>
                </div>
            </div>

            <Table<any> body={dummyProductBody} header={dummyHead} checkbox={true} />
        </div>
    )
}

export default AdminProductContent