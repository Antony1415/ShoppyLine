'use client'
import Image from 'next/image'
import React from 'react'

export interface IconProps {
    className?: string,
    size: {
        width: number,
        height: number,
    },
    src?: string,
    alt?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>,
}

const Icon = ({
    className,
    size,
    src = '',
    alt = 'Something Error',
    onClick
}: IconProps): React.JSX.Element => {
    return (
        <div className={`${className} flex justify-center items-center cursor-pointer`} onClick={onClick}>
            <div className='relative' style={size}>
                <Image src={src} alt={alt} fill />
            </div>
        </div>
    )
}

export default Icon