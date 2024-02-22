import React, { LegacyRef, useRef } from 'react'

type DebounceTimeout = React.MutableRefObject<ReturnType<typeof setTimeout> | null>
type DebounceCallback = (() => void) | undefined

const useDebounce = (debounceTimeout: DebounceTimeout, callback: DebounceCallback, delay: number = 500): void => {
    if (debounceTimeout!.current) clearTimeout(debounceTimeout.current)

    debounceTimeout.current = setTimeout(() => {
        callback && callback()
    }, delay)
}

export default useDebounce