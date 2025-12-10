import { useQuery } from '@tanstack/react-query';
import { User } from '../api/endpoints/User';

export const UseCurrentUser = () => {
    return useQuery({
        queryKey: ['currentUser'],
        queryFn: User,
        retry: false,
        staleTime: 1000 * 60 * 5,
    })
}