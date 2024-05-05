import { Logo, Text } from '@/components/atoms'
import React from 'react'

const MainLayoutFooter = (): React.JSX.Element => {
    return (
        <div className='bg-white p-4 flex justify-center items-center gap-5'>
            <Logo />

            <Text className='text-slate-400' type='p' text='Made by @Antony' />
        </div>
    )
}

export default MainLayoutFooter