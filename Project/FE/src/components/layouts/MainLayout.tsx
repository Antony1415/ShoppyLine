import React from 'react'
import { MainLayoutHeader } from '@/components/organisms'

interface MainLayoutProps {
    children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps): React.JSX.Element => {
    return (
        <div className='flex flex-col h-fit'>
            <MainLayoutHeader />
            {children}
        </div>
    )
}

export default MainLayout