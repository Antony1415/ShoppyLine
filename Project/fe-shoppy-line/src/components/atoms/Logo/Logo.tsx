import React from 'react'
import { Text } from '@/components/atoms'

interface LogoProps {
    className?: string;
    text?: string;
}

const Logo = ({ className, text }: LogoProps): React.JSX.Element => {
    // https://tools.picsart.com/text/font-generator/
    return (
        <Text className={`${className} font-bold text-[20px] text-green-600`} type='h1' text={text ? text : 'ＳｈｏｐｐｙＬＩＮＥ'} />
    )
}

export default Logo