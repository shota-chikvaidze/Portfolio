import { create } from 'zustand'

export const userAuth = create((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,

    setAuth: (user) => 
        set({
            user,
            isAuthenticated: true,
            isLoading: false
        }),

    clearAuth: () => 
        set({
            user: null,
            isAuthenticated: false,
            isLoading: false
        }),

    setLoading: (isLoading) => set({ isLoading }),
}))