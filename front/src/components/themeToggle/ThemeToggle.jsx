import React from 'react'
import { useThemeStore } from '../../store/ThemeStore'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <motion.button
      onClick={toggleTheme}
      className='cursor-pointer relative flex items-center justify-center w-[40px] h-[40px] rounded-lg bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 border border-white/10 transition-all duration-300 overflow-hidden group'
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='absolute'
      >
        <HiOutlineMoon className='text-[1.3rem] text-[var(--text-primary)]' />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className='absolute'
      >
        <HiOutlineSun className='text-[1.3rem] text-[var(--text-primary)]' />
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
