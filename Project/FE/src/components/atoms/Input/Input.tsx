import React from 'react'

export interface InputProps {
    className?: string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
    className,
    placeholder = 'Placeholder . . .',
    onChange,
    ...props
}: InputProps & React.HTMLProps<HTMLInputElement>): React.JSX.Element => {
    return (
        <input
            className={`${className} py-2 px-4 rounded-[5px] outline-blue-500/80 text-[16px] border-[1px] border-black`}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
        />
    )
}

export default Input