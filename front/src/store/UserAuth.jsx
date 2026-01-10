import { create } from 'zustand'

export const userAuth = create((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    hasCheckedAuth: false, 

    setAuth: (user) => 
        set({
            user,
            isAuthenticated: true,
            isLoading: false,
            hasCheckedAuth: true 
        }),

    clearAuth: () => 
        set( {
            user: null,
            isAuthenticated: false,
            isLoading: false,
            hasCheckedAuth: true
        }),


    setLoading: (isLoading) => set({ isLoading }),
}))