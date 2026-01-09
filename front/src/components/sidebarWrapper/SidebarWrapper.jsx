import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { userAuth } from '../../store/UserAuth'
import { Logout } from '../../api/endpoints/User'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import ThemeToggle from '../themeToggle/ThemeToggle';

const linkBase =
  'w-full rounded-lg px-3 py-2 text-sm font-[500] transition ' +
  'text-[var(--text-secondary)] hover:bg-[var(--glass-overlay)] hover:text-[var(--text-primary)] focus:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-[var(--border-color)]'

const linkActive = 'bg-[var(--glass-overlay)] text-[var(--text-primary)] border border-[var(--border-color)]'
const linkIdle = 'bg-transparent border border-transparent'



const SidebarWrapper = () => {

  const logoutMutation = useMutation({
    mutationKey: ['logout-mutation'],
    mutationFn: () => Logout(),
    onSuccess: () => {
      toast.success('Logged out successfully')
    },
    onError: () => {
      toast.error('Logout failed')
    }
  })

  const logoutFunc = async () => {
    logoutMutation.mutate()
    userAuth.getState().clearAuth()
  }

  
  return (
    <div className='flex w-full min-h-[100vh] h-full '>

        <div className='relative border-r border-[var(--border-color)] bg-[var(--glass-overlay)] backdrop-blur flex flex-col justify-between p-[12px] w-[220px]  '>

          <div className='flex flex-col gap-2'>
            <NavLink to="dashboard" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`} >
              Dashboard
            </NavLink>

            <NavLink to="contacts" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`} >
              Contacts
            </NavLink>
            
            <NavLink to="projects" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`} >
              Projects
            </NavLink>

            <NavLink to="add-project" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`} >
              Post project
            </NavLink>
          </div>

          <div className='sticky bottom-3 left-0 flex gap-2 justify-between'>

            <ThemeToggle />
            <button
                type='button'
                onClick={logoutFunc}
                className=' flex-1 cursor-pointer rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] px-4 py-2 text-sm font-[500] text-[var(--text-primary)] transition hover:bg-[var(--glass-overlay)]/50'
            >
                Logout
            </button>
          </div>

        </div>

        <div className='flex-1 min-w-0'>
          <Outlet />
        </div>

    </div>
  )
}

export default SidebarWrapper