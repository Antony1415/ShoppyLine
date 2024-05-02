'use client'
import React, { useEffect } from 'react'
import { MainLayoutHeader } from '@/components/organisms'
import { useAppDispatch } from '@/redux-toolkit';
import { setShowModal } from '@/redux-toolkit/modal/modalSlice';

interface MainLayoutProps {
    children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setShowModal(false))
    }, [])

    return (
        <div className='flex flex-col h-fit bg-[#f1f2f2] gap-5'>
            <MainLayoutHeader />
            {children}
        </div>
    )
}

export default MainLayout