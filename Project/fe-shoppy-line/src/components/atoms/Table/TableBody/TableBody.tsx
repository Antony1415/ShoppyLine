'use client'
import { Checkbox } from '@mui/material'
import React, { useCallback, useState } from 'react'

export interface TableBodyProps<T> {
    header: T[];
    data: any;
    onCheckSingle?: (id: string) => void;
    checked: string[];
}

const TableBody = <T extends { id: string, label: string }>({
    header,
    data,
    onCheckSingle,
    checked
}: TableBodyProps<T>): React.JSX.Element => {
    return (
        <tbody>
            {data.map((body: any, index: number) => {
                return (
                    <tr key={index}>
                        <td>
                            <Checkbox
                                onChange={() => onCheckSingle && onCheckSingle(body.id)}
                                checked={checked.includes(body.id)}
                            />
                        </td>

                        {
                            header.map((head: T) => {
                                return (
                                    <td key={head.id} className=''>
                                        {body[head.id]}
                                    </td>
                                )
                            })
                        }
                    </tr>
                )
            })}
        </tbody>
    )
}

export default TableBody