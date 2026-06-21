import React from 'react'
import { motion } from 'framer-motion'
import homeMain from '../../assets/images/newImage.jpg'
import Tech from '../../data/Tech'
import { Projects } from '../projects/Projects'
import { FiGithub, FiArrowDown } from 'react-icons/fi'
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { LuMail } from 'react-icons/lu'
import { play } from '../../utils/sounds'

const socials = [
  { label: 'GitHub', href: 'https://github.com/shota-chikvaidze', icon: <FiGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shota-chikvaidze-a6845b370/', icon: <FaLinkedinIn /> },
  { label: 'Facebook', href: 'https://www.facebook.com/shota.chikvaidze.90', icon: <FaFacebookF /> },
  { label: 'Email', href: 'mailto:shchikvaidze1@gmail.com', icon: <LuMail /> },
]

const facts = [
  { k: 'Now', v: 'Learning NestJS, building a marketplace backend' },
  { k: 'Focus', v: 'Full-stack web apps: React, Node, MongoDB' },
  { k: 'Based in', v: 'Tbilisi, Georgia' },
]

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
}

export const Home = () => {
  return (
    <>
      {/* Hero */}
      <section id='hero' className='section-y'>
        <div className='wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-10'>

          {/* Left: the hook */}
          <div className='lg:col-span-7'>
            <motion.span
              {...fadeUp}
              transition={{ duration: 0.4 }}
              className='eyebrow'
            >
              Web Developer · Georgia
            </motion.span>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.05 }}
              className='mt-4 text-[2.75rem] leading-[1.05] font-extrabold tracking-tight text-ink sm:text-6xl'
            >
              Shota Chikvaidze
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='mt-4 max-w-xl text-lg text-ink-muted sm:text-xl'
            >
              I design and ship full-stack web apps with React and Node,
              including one in production with real users.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className='mt-8 flex flex-wrap items-center gap-3'
            >
              <a
                href='/CV.pdf'
                download
                onClick={() => play('cardClick')}
                onMouseEnter={() => play('hover')}
                className='inline-flex h-10 items-center rounded-lg bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover'
              >
                Download CV
              </a>
              <a
                href='#about'
                onClick={() => play('cardClick')}
                onMouseEnter={() => play('hover')}
                className='inline-flex h-10 items-center gap-2 rounded-lg border border-line px-5 text-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-surface'
              >
                About me
                <FiArrowDown className='text-base' />
              </a>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='mt-8 flex items-center gap-2'
            >
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel='noopener noreferrer'
                  aria-label={label}
                  data-cursor-hover
                  onClick={() => play('cardClick')}
                  onMouseEnter={() => play('hover')}
                  className='flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink'
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: portrait, sized to balance the row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='lg:col-span-5'
          >
            <div className='mx-auto w-56 sm:w-72 lg:ml-auto lg:mr-0'>
              <div className='overflow-hidden rounded-2xl border border-line bg-surface'>
                <img
                  src={homeMain}
                  alt='Shota Chikvaidze'
                  className='aspect-square w-full object-cover'
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Projects component */}
      <Projects />

      {/* About section */}
      <section id='about' className='section-y'>
        <div className='wrap grid gap-12 lg:grid-cols-12 lg:gap-16'>

          <div className='lg:col-span-7'>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4 }}
              className='eyebrow'
            >
              About
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className='mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl'
            >
              Building real products for 2+ years.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className='mt-6 space-y-4 text-[1.05rem] leading-relaxed text-ink-muted'
            >
              <p>
                I work end to end, from data models and APIs on the backend to
                the interface and interactions on the front. My main project,{' '}
                <a
                  href='https://uplearn.ge'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-accent underline-offset-4 hover:underline'
                >
                  Uplearn
                </a>
                , is in production and used by real people, which keeps me
                honest about reliability and the details that actually matter.
              </p>
              <p>
                I commit daily and care about code that stays readable as it grows: clear structure, sensible naming, decisions I can defend. I'd rather ship something small that works than over-build something that never ships.
              </p>
            </motion.div>
          </div>

          {/* Facts + stack */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className='lg:col-span-5'
          >
            <dl className='divide-y divide-line rounded-xl border border-line'>
              {facts.map(({ k, v }) => (
                <div key={k} className='flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-4'>
                  <dt className='w-24 shrink-0 text-sm font-medium text-ink-faint'>{k}</dt>
                  <dd className='text-sm text-ink'>{v}</dd>
                </div>
              ))}
            </dl>

            <div className='mt-6'>
              <h3 className='text-sm font-medium text-ink-faint'>Stack</h3>
              <ul className='mt-3 flex flex-wrap gap-2'>
                {Tech.map(({ name, icon }) => (
                  <li
                    key={name}
                    className='inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted'
                  >
                    <span className='text-sm text-ink-faint'>{icon}</span>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
