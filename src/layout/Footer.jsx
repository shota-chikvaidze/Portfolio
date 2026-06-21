import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa6'
import { LuMail } from 'react-icons/lu'

const links = [
  { label: 'GitHub', href: 'https://github.com/shota-chikvaidze', icon: <FiGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shota-chikvaidze-a6845b370/', icon: <FaLinkedinIn /> },
  { label: 'Email', href: 'mailto:shchikvaidze1@gmail.com', icon: <LuMail /> },
]

const Footer = () => {
  return (
    <footer className='w-full border-t border-line'>
      <div className='wrap flex flex-col items-center justify-between gap-4 py-8 sm:flex-row'>
        <p className='text-sm text-ink-faint'>© 2026 Shota Chikvaidze</p>

        <div className='flex items-center gap-2'>
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel='noopener noreferrer'
              aria-label={label}
              className='flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink'
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
