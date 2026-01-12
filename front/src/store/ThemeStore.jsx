import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useThemeStore = create(
  persist(
    (set) => ({
      thcdeme: 'dark',
      
      setTheme: (theme) => {
        set({ theme })
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
      },
      
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === 'dark' ? 'light' : 'dark'
          document.documentElement.classList.remove('light', 'dark')
          document.documentElement.classList.add(newTheme)
          return { theme: newTheme }
        })
      },
      
      initTheme: () => {
        set((state) => {
          const theme = state.theme || 'dark'
          document.documentElement.classList.add(theme)
          return { theme }
        })
      }
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          document.documentElement.classList.remove('light', 'dark')
          document.documentElement.classList.add(state.theme)
        }
      }
    }
  )
)
