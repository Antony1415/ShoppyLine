"use client"
import { Sidebar } from '@/components/organisms';
import { AdminContent } from '@/components/pages';
import React, { useState } from 'react'

const AdminLayout = (): React.JSX.Element => {
    const [menu, setMenu] = useState<string>("product");

    return (
        <div className='flex bg-sky-100/50 w-full h-full'>
            <Sidebar menu={menu} setMenu={setMenu} />

            <div className='flex-[8.7] bg-white px-8 py-5'>
                <AdminContent menu={menu} />
            </div>
        </div>
    )
}

export default AdminLayout