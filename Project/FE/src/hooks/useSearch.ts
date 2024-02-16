import { useEffect, useState } from 'react'

interface UseSearchProps {
  query: string,
  fetchURL?: string,
  useDebounce?: boolean,
  delay?: number,
}

const useSearch = ({
  query = '',
  fetchURL = '',
  useDebounce = true,
  delay = 500,
}: UseSearchProps) => {
  const [data, setData] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (useDebounce) {
      setLoading(true)
      const searchDebounce: ReturnType<typeof setTimeout> = setTimeout(() => {
        setData(query ?? '')
        setLoading(false)
      }, delay)

      return () => {
        clearInterval(searchDebounce)
      }
    }
  }, [query])

  return {
    data,
    loading
  }
}

export default useSearch