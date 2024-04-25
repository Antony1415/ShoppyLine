'use client'
import React from 'react'

export interface ButtonProps {
    className?: string,
    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

const Button = ({
    className,
    children,
    onClick,
    disabled
}: ButtonProps & React.HTMLProps<HTMLButtonElement>): React.JSX.Element => {
    const renderButton = () => {
        return (
            <button
                className={`${className} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                    flex justify-center items-center py-2 px-4 rounded-[5px] border-[1px] border-black`
                }
                onClick={onClick}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }

    return renderButton()
}

export default Button