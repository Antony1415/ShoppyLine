'use client'
import React, { useState } from 'react'
import { MainLayoutHeader } from '@/components/organisms'
import { InputSearch } from '../atoms'

interface MainLayoutProps {
    children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.JSX.Element => {
    return (
        <div className='flex flex-col h-full gap-[25px]'>
            <MainLayoutHeader />
            {children}
        </div>
    )
}

export default MainLayout