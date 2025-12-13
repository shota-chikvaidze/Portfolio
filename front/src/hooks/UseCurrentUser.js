import { useQuery } from '@tanstack/react-query'
import { User } from '../api/endpoints/User'
import { userAuth } from '../store/UserAuth'

export const useCurrentUser = () => {
  const accessToken = userAuth((s) => s.accessToken)
  const setAuth = userAuth((s) => s.setAuth)

  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => User(),
    enabled: !!accessToken,
    retry: false,
    staleTime: 1000 * 60 * 5,

    onSuccess: (data) => {
      setAuth({
        user: data.user,
        accessToken,
        isAuthenticated: true,
      })
    },
  })
}
