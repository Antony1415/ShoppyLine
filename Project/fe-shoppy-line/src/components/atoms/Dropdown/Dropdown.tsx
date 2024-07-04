"use client"
import { createTheme, FormControl, makeStyles, MenuItem, Select, SelectChangeEvent, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { Text } from '../Text';

export type DropdownOption = {
    label: string;
    value: string;
}

export interface DropdownProps {
    className?: string;
    options?: DropdownOption[];
    onChange?: (e: string) => void;
    value?: string,
}

const Dropdown = ({
    className,
    options,
    onChange,
    value
}: DropdownProps): React.JSX.Element => {

    const theme = createTheme({
        components: {
            // Name of the MUI component
            MuiInputBase: {
                styleOverrides: {
                    root: {
                        height: '100%',
                        borderColor: 'black',
                    }
                }
            }
        },
    });

    const handleChange = (event: SelectChangeEvent) => {
        onChange && onChange(event.target.value)
    }


    return (
        <ThemeProvider theme={theme}>
            <FormControl
                className={className}
                sx={{ minWidth: 120 }}
            >
                <Select
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {options?.map((item) => {
                        return (
                            <MenuItem value={item.value}>
                                <Text text={item.label} />
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </ThemeProvider>
    )
}

export default Dropdown