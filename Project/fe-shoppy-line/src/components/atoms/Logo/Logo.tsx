import React from 'react'
import { Text } from '@/components/atoms'

interface LogoProps {
    className?: string;
}

const Logo = ({ className }: LogoProps): React.JSX.Element => {
    return (
        <Text className={`${className} font-bold text-[20px] text-green-600`} type='h1' text='ＳｈｏｐｐｙＬＩＮＥ' />
    )
}

export default Logo