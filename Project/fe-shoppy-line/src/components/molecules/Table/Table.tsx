'use client'
import React, { useCallback, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import styles from './Table.module.css'
import { TableBody, TableHeader } from '@/components/atoms';

export interface TableProps<T> {
    header: T[];
    body: any[];
    className?: string
}

const Table = <T extends { id: string, label: string }>({
    header,
    body,
    className
}: TableProps<T>): React.JSX.Element => {
    const [checkedRows, setCheckedRows] = useState<string[]>([])

    const onCheckSingle = useCallback((id: string) => {
        setCheckedRows(prev => {
            if (prev.includes(id)) {
                return prev.filter((val: string) => val !== id)
            }

            return [id, ...prev]
        })
    }, [])

    const onCheckAll = useCallback(() => {
        let value: string[]

        if (checkedRows.length > 0) {
            value = checkedRows.length === body.length ? [] : Array.from(body, (item) => item.id)
            return setCheckedRows(value)
        }

        value = Array.from(body, (item) => item.id)
        setCheckedRows(value)
    }, [checkedRows])

    return (
        <table className={`${styles.Table} ${className}`}>
            <TableHeader<T>
                header={header}
                onCheckAll={onCheckAll}
                checked={checkedRows.length === body.length}
            />

            <TableBody<T>
                data={body}
                header={header}
                onCheckSingle={onCheckSingle}
                checked={checkedRows}
            />
        </table>
    )
}

export default Table