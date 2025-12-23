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
    staleTime: 1000 * 60 * 5,

    onSuccess: (data) => {
      setAuth(data)
    },

    onError: () => {
      clearAuth()
    },
  })
  useEffect(() => {
    if (skipCheck) {
      setLoading(false)
    } else {
      setLoading(query.isLoading)
    }
  }, [query.isLoading, setLoading, skipCheck])

  return query
}
