import React from 'react'

export interface InputProps {
    className?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputRef?: React.LegacyRef<HTMLInputElement>;
}

const Input = ({
    className,
    placeholder = 'Placeholder . . .',
    onChange,
    inputRef,
    ...props
}: InputProps & React.HTMLProps<HTMLInputElement>): React.JSX.Element => {
    return (
        <input
            ref={inputRef}
            className={`${className} py-2 px-4 rounded-[5px] outline-blue-500/80 text-[16px] border-[1px] border-black`}
            placeholder={placeholder}
            onChange={onChange}
            {...props}
        />
    )
}

export default Input