import React, { useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Layout = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, []) 

  const scrollTo = (id, offset = 80) => {
    const el = document.getElementById(id)
    if (!el) return

    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      offset

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <header className={`flex justify-center fixed z-40 top-0 left-0 w-full h-[70px] transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-header-scroll)]/30 backdrop-blur-md shadow-md' : 'bg-transparent'}`} >
        <div className='max-w-7xl w-full flex justify-between items-center px-[20px] lg:px-0'>

          <div>
            <h1 onClick={() => scrollTo('hero',)} className='cursor-pointer text-[1.5rem] font-[500] text-[var(--text-primary)]'>Shota Chikvaidze</h1>
          </div>

          <ul className={`flex items-center gap-4`}>

            <li onClick={() => scrollTo('hero', 100)}  className="text-[var(--text-primary)] cursor-pointer hover:text-[var(--text-secondary)] transition-colors duration-400 "> 
              Home 
            </li>

            <li onClick={() => scrollTo('projects', 100)} className="text-[var(--text-primary)] cursor-pointer hover:text-[var(--text-secondary)] transition-colors duration-400 "> 
              Projects 
            </li>

            <li onClick={() => scrollTo('tech', 100)} className="text-[var(--text-primary)] cursor-pointer hover:text-[var(--text-secondary)] transition-colors duration-400 "> 
              Tech 
            </li>

          </ul>


        </div>
      </header>

      <div className='h-[70px]'></div>
    </>
  )
}

export default Layout