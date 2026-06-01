import React, { useEffect, useState } from 'react'
import { play } from '../utils/sounds'
import { LuMenu, LuX } from "react-icons/lu";


const Layout = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, []) 

  // prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])


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

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Projects', id: 'projects' },
    { label: 'Tech', id: 'tech' },
    { label: 'About', id: 'about' },
  ]

  return (
    <>
      <header className={`flex justify-center fixed lg:px-4 z-40 top-0 left-0 w-full h-[70px] transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-header-scroll)]/30 backdrop-blur-md shadow-md' : 'bg-transparent'}`} >
        <div className='max-w-7xl w-full flex justify-between items-center px-4 relative '>

          <div>
            <h1 onClick={() => scrollTo('hero',)} className='cursor-pointer text-[1.2rem] sm:text-[1.5rem] font-[500] text-[var(--text-primary)]'>Shota Chikvaidze</h1>
          </div>

          <ul className='hidden sm:flex items-center gap-4'>
            {navItems.map(({ label, id }) => (
              <li
                key={id}
                data-cursor-hover
                onMouseEnter={() => play('cardHover')}
                onClick={() => scrollTo(id, 100)}
                className='text-[var(--text-primary)] cursor-pointer hover:text-[var(--text-secondary)] hover:scale-105 transition-all duration-300'
              >
                {label}
              </li>
            ))}
          </ul>

          <div className={`flex items-center gap-4 sm:hidden`}>
            <LuMenu className='text-white text-xl ' onClick={() => setIsOpen(true)} />
          </div>

        </div>
      </header>
      

      <div onClick={() => setIsOpen(false)} className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

        <button
          className='absolute top-5 right-5 text-white text-2xl'
          onClick={() => setIsOpen(false)}
        >
          <LuX />
        </button>

        <ul className='flex flex-col items-center gap-8'>
          {navItems.map(({ label, id }) => (
            <li
              key={id}
              data-cursor-hover
              onMouseEnter={() => play('cardHover')}
              onClick={() => { scrollTo(id, 100) }}
              className='text-[var(--text-primary)] text-2xl cursor-pointer hover:text-[var(--text-secondary)] hover:scale-105 transition-all duration-300'
            >
              {label}
            </li>
          ))}
        </ul>

      </div>

      <div className='h-[70px]'></div>
    </>
  )
}

export default Layout