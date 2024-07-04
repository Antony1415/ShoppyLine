'use client'
import React, { useCallback, useState } from 'react'
import styles from './Table.module.css'
import { TableBody, TableHeader } from '@/components/atoms';
import { TableHeaderType } from '@/components/atoms/Table/TableHeader/TableHeader';

export interface TableProps<THead extends TableHeaderType> {
    header: THead[];
    body: any;
    className?: string;
    checkbox?: boolean;
}

const Table = <THead extends TableHeaderType>({
    header,
    body,
    className,
    checkbox = false
}: TableProps<THead>): React.JSX.Element => {
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
            value = checkedRows.length === body.length ? [] : Array.from(body, (item: { id: any }) => item.id)
            return setCheckedRows(value)
        }

        value = Array.from(body, (item: { id: any }) => item.id)
        setCheckedRows(value)
    }, [checkedRows])

    return (
        <table className={`${styles.Table} ${className}`}>
            <TableHeader<THead>
                header={header}
                onCheckAll={onCheckAll}
                checked={checkedRows.length === body.length}
                checkbox={checkbox}
            />

            <TableBody<THead>
                data={body}
                header={header}
                onCheckSingle={onCheckSingle}
                checked={checkedRows}
                checkbox={checkbox}
            />
        </table>
    )
}

export default Table