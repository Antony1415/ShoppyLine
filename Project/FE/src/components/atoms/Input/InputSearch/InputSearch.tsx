'use client'
import React, { useEffect, useState } from 'react'
import { Icon } from '@/components/atoms';

export interface InputSearchProps {
    className?: string;
    iconPosition?: 'left' | 'right';
    control?: any
    name?: string,
    placeholder?: string,
    value?: string,
    iconSize?: {
        width: number,
        height: number,
    },
    seperator?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    onFocus?: React.FocusEventHandler<HTMLInputElement>,
    onBlur?: React.FocusEventHandler<HTMLInputElement>,
}
const InputSearch = ({
    className,
    iconPosition = 'left',
    control,
    name,
    placeholder = 'Search...',
    value,
    iconSize = { width: 20, height: 25 },
    seperator = true,
    onChange,
    onFocus,
    onBlur,
    ...props
}: InputSearchProps): React.JSX.Element => {

    const position = () => {
        switch (iconPosition) {
            case 'left':
                return 'flex-row';
            case 'right':
                return 'flex-row-reverse'
        }
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }

    const renderInputSearch = () => {
        return (
            <div className={`${className} ${position()} gap-4 flex items-center py-2 px-4 border-[1px] border-[#BFC9D9] rounded-[5px]`}>
                <Icon className={`${seperator && 'border-r-[1px] border-[#e1e3e4] pr-4'}`} src='/assets/svg/search_icon.svg' alt='Searh Icon' size={iconSize} />

                <input
                    className='w-full h-full outline-none'
                    placeholder={placeholder}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onChange={onChangeHandler}
                    value={value}
                    {...props}
                />
            </div>
        )
    }

    return renderInputSearch()
}

export default InputSearch