import { Checkbox } from '@mui/material'
import React from 'react'

export interface TableHeaderProps<T> {
    header: T[];
    onCheckAll?: () => void;
    checked: boolean;
    checkbox?: boolean;
}

const TableHeader = <T extends { id: string, label: string }>({
    header,
    onCheckAll,
    checked,
    checkbox
}: TableHeaderProps<T>): React.JSX.Element => {
    return (
        <thead className='font-semibold text-[15px]'>
            <tr>
                {checkbox && (
                    <td>
                        <Checkbox
                            className='!p-0 !pr-[5px]'
                            onChange={onCheckAll}
                            checked={checked}
                        />
                    </td>
                )}

                {header.map((head: T, index) => {
                    return (
                        <td key={index}>{head.label}</td>
                    )
                })}
            </tr>
        </thead>
    )
}

export default TableHeader