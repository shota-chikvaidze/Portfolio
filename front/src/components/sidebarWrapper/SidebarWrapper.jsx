import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { userAuth } from '../../store/UserAuth'

const linkBase =
  'w-full rounded-lg px-3 py-2 text-sm font-[500] transition ' +
  'text-white/80 hover:bg-white/10 hover:text-white focus:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-white/20'

const linkActive = 'bg-white/10 text-white border border-white/10'
const linkIdle = 'bg-transparent border border-transparent'



const SidebarWrapper = () => {

    const navigate = useNavigate()
    const logout = userAuth((s) => s.clearAuth)

    const logoutFunc = () => {
        logout()
        navigate('/')
    }

  return (
    <div className='flex w-full min-h-[100vh] h-full '>

        <div className='relative border-r border-white/5 bg-white/5 backdrop-blur flex flex-col justify-between p-[12px] w-[220px]  '>
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

            <button
                type='button'
                onClick={logoutFunc}
                className='sticky bottom-3 cursor-pointer rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-[500] text-white/90 transition hover:bg-white/10'
            >
                Logout
            </button>

        </div>

        <div className='flex-1 min-w-0'>
          <Outlet />
        </div>

    </div>
  )
}

export default SidebarWrapper