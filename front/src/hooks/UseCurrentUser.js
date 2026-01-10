import { useQuery } from '@tanstack/react-query'
import { User } from '../api/endpoints/User'
import { userAuth } from '../store/UserAuth'
import { useEffect } from 'react'


export const useCurrentUser = (skipCheck = false) => {
  const setAuth = userAuth((s) => s.setAuth)
  const clearAuth = userAuth((s) => s.clearAuth)
  const setLoading = userAuth((s) => s.setLoading)


  const query = useQuery({
    queryKey: ['currentUser'],
    queryFn: () => User(),
    enabled: !skipCheck,
    retry: false,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  useEffect(() => {
    if (skipCheck) {
      setLoading(false)
      return
    }

    if (query.isLoading) {
      setLoading(true)
    }else if (query.isSuccess && query.data) {
      setAuth(query.data)
      setLoading(false)
    }else if (query.isError) {
      clearAuth()
      setLoading(false)
    }
  }, [query.isLoading, query.isSuccess, query.isError, query.data, setAuth, clearAuth, setLoading, skipCheck])

  return query
}
