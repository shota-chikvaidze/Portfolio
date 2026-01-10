import React, { useEffect, useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import ThemeToggle from '../components/themeToggle/ThemeToggle';

const Layout = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, []) 

  return (
    <>
      <header className={`flex justify-center fixed z-40 top-0 left-0 w-full h-[70px] transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-header-scroll)]/30 backdrop-blur-md shadow-md' : 'bg-transparent'}`} >
        <div className='max-w-7xl w-full flex justify-between items-center px-[20px] lg:px-0'>

          <div>
            <h1 onClick={() => navigate('/')} className='cursor-pointer text-[1.8rem] font-[500] text-[var(--text-primary)]'>SC.</h1>
          </div>

          <ul className={`hidden md:flex items-center gap-2`}>

            <li className="relative group">
              <NavLink to="/" className={({ isActive }) => isActive ? 'flex items-center justify-center w-[40px] h-[40px] bg-[var(--nav-active-bg)] rounded-lg' : 'flex items-center justify-center w-[40px] h-[40px] hover:bg-[var(--nav-hover-bg)] rounded-lg'}>
                <IoHomeOutline className="text-[var(--text-primary)] text-[1.3rem]" />
              </NavLink>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded-md bg-black/20 text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
                Home
              </span>
            </li>

            <li className="relative group">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'flex items-center justify-center w-[40px] h-[40px] bg-[var(--nav-active-bg)] rounded-lg' : 'flex items-center justify-center w-[40px] h-[40px] hover:bg-[var(--nav-hover-bg)] rounded-lg'}>
                <LuUser className='text-[var(--text-primary)] text-[1.3rem] font-[400] ' />
              </NavLink>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded-md bg-black/20 text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
                About
              </span>
            </li>

            <li className="relative group">
              <NavLink to="/projects" className={({ isActive }) => isActive ? 'flex items-center justify-center w-[40px] h-[40px] bg-[var(--nav-active-bg)] rounded-lg' : 'flex items-center justify-center w-[40px] h-[40px] hover:bg-[var(--nav-hover-bg)] rounded-lg'}>
                <FaRegFolder className='text-[var(--text-primary)] text-[1.3rem] font-[400]  ' />
              </NavLink>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded-md bg-black/20 text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
                Projects
              </span>
            </li>

            <li className="relative group">
              <NavLink to="/services" className={({ isActive }) => isActive ? 'flex items-center justify-center w-[40px] h-[40px] bg-[var(--nav-active-bg)] rounded-lg' : 'flex items-center justify-center w-[40px] h-[40px] hover:bg-[var(--nav-hover-bg)] rounded-lg'}>
                <MdOutlineMiscellaneousServices className='text-[var(--text-primary)] text-[1.3rem] font-[400]  ' />
              </NavLink>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded-md bg-black/20 text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
                Services
              </span>
            </li>

            <li className="relative group">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'flex items-center justify-center w-[40px] h-[40px] bg-[var(--nav-active-bg)] rounded-lg' : 'flex items-center justify-center w-[40px] h-[40px] hover:bg-[var(--nav-hover-bg)] rounded-lg'}>
                <HiOutlineMail className='text-[var(--text-primary)] text-[1.3rem] font-[400]  ' />
              </NavLink>

              <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs rounded-md bg-black/20 text-white opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none transition-all duration-200 whitespace-nowrap">
                Contact
              </span>
            </li>
            
          </ul>
          <div className='hidden md:flex items-center gap-3'>
            <ThemeToggle />
            <Link to={'https://github.com/shota-chikvaidze'} target='_blank'> <LuGithub className=' text-[1.5rem] text-[var(--text-primary)] ' /> </Link>
          </div>

          <div className='flex md:hidden items-center gap-3'>
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='flex items-center justify-center w-[40px] h-[40px] hover:bg-[var(--nav-hover-bg)] rounded-lg transition-colors'
            >
              {isMobileMenuOpen ? (
                <IoClose className='text-[var(--text-primary)] text-[1.8rem]' />
              ) : (
                <HiOutlineMenuAlt3 className='text-[var(--text-primary)] text-[1.8rem]' />
              )}
            </button>
          </div>

        </div>
      </header>

      <div className={`fixed top-[70px] left-0 w-full bg-[var(--bg-primary)] z-30 md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100 border-b border-[var(--border-color)]' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className='max-w-7xl mx-auto px-[20px] py-4'>
          <ul className='flex flex-col gap-3'>
            <li>
              <NavLink 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => isActive ? 'flex items-center gap-3 px-4 py-3 bg-[var(--nav-active-bg)] rounded-lg text-[var(--text-primary)]' : 'flex items-center gap-3 px-4 py-3 hover:bg-[var(--nav-hover-bg)] rounded-lg text-[var(--text-primary)]'}
              >
                <IoHomeOutline className="text-[1.3rem]" />
                <span className='text-[1rem]'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => isActive ? 'flex items-center gap-3 px-4 py-3 bg-[var(--nav-active-bg)] rounded-lg text-[var(--text-primary)]' : 'flex items-center gap-3 px-4 py-3 hover:bg-[var(--nav-hover-bg)] rounded-lg text-[var(--text-primary)]'}
              >
                <LuUser className="text-[1.3rem]" />
                <span className='text-[1rem]'>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => isActive ? 'flex items-center gap-3 px-4 py-3 bg-[var(--nav-active-bg)] rounded-lg text-[var(--text-primary)]' : 'flex items-center gap-3 px-4 py-3 hover:bg-[var(--nav-hover-bg)] rounded-lg text-[var(--text-primary)]'}
              >
                <FaRegFolder className="text-[1.3rem]" />
                <span className='text-[1rem]'>Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => isActive ? 'flex items-center gap-3 px-4 py-3 bg-[var(--nav-active-bg)] rounded-lg text-[var(--text-primary)]' : 'flex items-center gap-3 px-4 py-3 hover:bg-[var(--nav-hover-bg)] rounded-lg text-[var(--text-primary)]'}
              >
                <MdOutlineMiscellaneousServices className="text-[1.3rem]" />
                <span className='text-[1rem]'>Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => isActive ? 'flex items-center gap-3 px-4 py-3 bg-[var(--nav-active-bg)] rounded-lg text-[var(--text-primary)]' : 'flex items-center gap-3 px-4 py-3 hover:bg-[var(--nav-hover-bg)] rounded-lg text-[var(--text-primary)]'}
              >
                <HiOutlineMail className="text-[1.3rem]" />
                <span className='text-[1rem]'>Contact</span>
              </NavLink>
            </li>
            <li className='pt-2 border-t border-[var(--border-color)]'>
              <Link 
                to={'https://github.com/shota-chikvaidze'} 
                target='_blank'
                className='flex items-center gap-3 px-4 py-3 hover:bg-[var(--nav-hover-bg)] rounded-lg text-[var(--text-primary)]'
              >
                <LuGithub className="text-[1.3rem]" />
                <span className='text-[1rem]'>GitHub</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className='h-[70px]'></div>
    </>
  )
}

export default Layout