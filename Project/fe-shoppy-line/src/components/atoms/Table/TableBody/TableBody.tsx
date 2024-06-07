'use client'
import { Checkbox } from '@mui/material'
import React from 'react'
import { Icon } from '@/components/atoms';

export interface TableBodyProps<T> {
    header: T[];
    data: any;
    onCheckSingle?: (id: string) => void;
    checked: string[];
    checkbox?: boolean;
}

const TableBody = <T extends { id: string, label: string }>({
    header,
    data,
    onCheckSingle,
    checked,
    checkbox
}: TableBodyProps<T>): React.JSX.Element => {
    const onEditRow = (index: number) => {
        alert("Index: " + index)
    }

    const onDeleteRow = (index: number) => {
        if (checked.length > 0) {
            alert("Index: " + checked)
        } else {
            alert("Index: " + index)
        }
    }

    return (
        <tbody className='text-[12px]'>
            {data.map((body: any, index: number) => {
                return (
                    <tr key={index}>
                        {checkbox && (
                            <td>
                                <Checkbox
                                    className='!p-0 !pr-[5px]'
                                    onChange={() => onCheckSingle && onCheckSingle(body.id)}
                                    checked={checked.includes(body.id)}
                                />
                            </td>
                        )}

                        {header.map((head: T) => {
                            if (head.id === "action") {
                                return (
                                    <td key={head.id}>
                                        <div className='flex items-center justify-center gap-4'>
                                            <Icon
                                                className={`transition-opacity ${checked.length > 0 && 'opacity-50 !cursor-not-allowed pointer-events-none'}`}
                                                size={{ height: 16, width: 16 }}
                                                src='/assets/svg/edit_icon.svg'
                                                onClick={() => onEditRow(index)}
                                            />
                                            <Icon
                                                size={{ height: 16, width: 16 }}
                                                src='/assets/svg/delete_icon.svg'
                                                onClick={() => onDeleteRow(index)}
                                            />
                                        </div>
                                    </td>
                                )
                            }

                            return (
                                <td key={head.id}>
                                    {body[head.id]}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody