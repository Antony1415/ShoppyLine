'use client'
import { InputSearch, InputSearchProps, Text } from '@/components/atoms'
import { handleClickOutsideComponent } from '@/utils/func'
import React, { useEffect, useRef, useState } from 'react'

export type SearchBoxData<T> = {
  value: T,
  label: string,
}

export interface SearchBoxhProps<T> extends InputSearchProps {
  className?: string,
  data: SearchBoxData<T>[],
  onClick?: (label: string) => void,
}

const SearchBox = <T extends unknown>({
  className,
  data = [],
  onClick,
  ...props
}: SearchBoxhProps<T>): React.JSX.Element => {
  const [showContent, setShowContent] = useState(false)
  const searchBoxRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (showContent) {
      const cleanUpHandleClickOutside = handleClickOutsideComponent(searchBoxRef, showContent, (val) => setShowContent(val))

      return () => cleanUpHandleClickOutside()
    }
  }, [showContent])

  const renderSearchBox = () => {
    const renderContent = (item: SearchBoxData<T>) => {
      const onClickContent = () => {
        onClick && onClick(item.label)
        inputRef!.current!.value = item.label
        setShowContent(false)
      }

      return (
        <div className='cursor-pointer hover:bg-sky-200 py-2 px-4' onClick={onClickContent}>
          <Text type='span' text={item.label} />
        </div>
      )
    }

    return (
      <div ref={searchBoxRef} className={`w-full h-fit relative`}>
        <InputSearch
          inputRef={inputRef}
          className={`${className} ${showContent && 'border-b-0 rounded-b-[0px]'}`}
          onFocus={() => setShowContent(true)}
          {...props}
        />

        {showContent && (
          <div className='absolute z-50 w-full h-fit max-h-[200px] no-scrollbar rounded-b-[10px] overflow-y-scroll gap-2 flex flex-col border-[1px] border-[#BFC9D9] bg-white'>
            {data.length > 0 ?
              data.map((item) => {
                return renderContent(item as SearchBoxData<T>)
              }) :
              <Text type='span' text='No Options.' />
            }
          </div>
        )}
      </div>
    )
  }

  return renderSearchBox()
}

export default SearchBox