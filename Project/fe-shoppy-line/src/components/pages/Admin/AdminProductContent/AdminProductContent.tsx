"use client"
import React, { useMemo, useState } from 'react'
import { Table } from '@/components/molecules'
import { dummyBody, dummyHead, DummyHeadType } from '@/components/molecules/Table/DummyTable'
import { Button, Dropdown, InputSearch, Text } from '@/components/atoms'
import Image from 'next/image'
import { handleSearch } from '@/utils/func'

const AdminProductContent = () => {
    const dummyDropdown = [
        { value: "0", label: "None" },
        { value: "10", label: "Ten" },
        { value: "20", label: "Twenty" },
        { value: "30", label: "Thirty" },
    ]

    const [searchProduct, setSearchProduct] = useState<string>('');
    const [filterProduct, setFilterProduct] = useState<string>(dummyDropdown[0].value);

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
                    <Dropdown
                        value={filterProduct}
                        options={dummyDropdown}
                        onChange={(val) => setFilterProduct(val)}
                        className=''
                    />

                    <Button className='px-6 py-[15px] gap-5' onClick={() => alert("Add Product!")}>
                        <Text text='Add Product' className='text-[16px] font-semibold' />
                        <Image alt='' src={'/assets/svg/create_plus_icon.svg'} width={20} height={20} />
                    </Button>
                </div>
            </div>

            <Table<DummyHeadType> body={dummyProductBody} header={dummyHead} checkbox={true} />
        </div>
    )
}

export default AdminProductContent