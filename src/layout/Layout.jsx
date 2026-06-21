import React, { useEffect, useState } from 'react'
import { play } from '../utils/sounds'
import { LuMenu, LuX } from "react-icons/lu";

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Projects', id: 'projects' },
  { label: 'About', id: 'about' },
]

const Layout = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // prevent body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id, offset = 80) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-40 flex w-full justify-center h-[64px] transition-colors duration-300 ${
          isScrolled
            ? 'bg-bg/80 backdrop-blur-md border-b border-line'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className='wrap flex items-center justify-between'>

          <button
            onClick={() => scrollTo('hero')}
            className='text-[1.05rem] font-semibold tracking-tight text-ink transition-colors hover:text-accent'
          >
            Shota Chikvaidze
          </button>

          <nav aria-label='Primary'>
            <ul className='hidden sm:flex items-center gap-1'>
              {navItems.map(({ label, id }) => {
                const active = activeId === id
                return (
                  <li key={id}>
                    <button
                      data-cursor-hover
                      aria-current={active ? 'true' : undefined}
                      onMouseEnter={() => play('cardHover')}
                      onClick={() => scrollTo(id, 90)}
                      className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                        active
                          ? 'text-accent'
                          : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          <button
            className='sm:hidden text-ink'
            aria-label='Open menu'
            onClick={() => setIsOpen(true)}
          >
            <LuMenu className='text-xl' />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg/95 backdrop-blur-md transition-opacity duration-300 sm:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          className='absolute top-5 right-5 text-2xl text-ink'
          aria-label='Close menu'
          onClick={() => setIsOpen(false)}
        >
          <LuX />
        </button>

        <nav aria-label='Mobile'>
          <ul className='flex flex-col items-center gap-8'>
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <button
                  data-cursor-hover
                  aria-current={activeId === id ? 'true' : undefined}
                  onClick={() => { setIsOpen(false); scrollTo(id, 90) }}
                  className={`text-2xl font-medium transition-colors ${
                    activeId === id ? 'text-accent' : 'text-ink'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className='h-[64px]' />
    </>
  )
}

export default Layout
