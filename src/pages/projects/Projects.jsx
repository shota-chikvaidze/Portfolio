import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { TbWorld } from 'react-icons/tb'
import { LuX, LuImages } from 'react-icons/lu'
import { play } from '../../utils/sounds'

import projects from '../../data/Projects'

const GalleryImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className='relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface-hover'>
      {!loaded && (
        <div className='absolute inset-0 animate-pulse bg-surface-hover' aria-hidden='true' />
      )}
      <img
        src={src}
        alt={alt}
        loading='lazy'
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject) return
    const onKey = (e) => {
      if (e.key === 'Escape') { play('closeCard'); setSelectedProject(null) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selectedProject])

  return (
    <>
      <section id='projects' className='section-y border-y border-line bg-surface/30'>
        <div className='wrap'>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className='mb-10 flex items-end justify-between gap-4'
          >
            <div>
              <span className='eyebrow'>Work</span>
              <h2 className='mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl'>
                Selected projects
              </h2>
            </div>
            <span className='hidden shrink-0 text-sm text-ink-faint sm:block'>
              {projects.length} projects
            </span>
          </motion.div>

          <div className='grid gap-6 lg:grid-cols-2'>
            {projects.map((pro, index) => {
              const hasGallery = pro.images && pro.images.length > 1
              return (
                <motion.article
                  key={pro.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => play('cardHover')}
                  className='group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent hover:shadow-2xl hover:shadow-black/40'
                >
                  <button
                    type='button'
                    onClick={() => { play('openCard'); setSelectedProject(pro) }}
                    aria-label={`View ${pro.title} gallery`}
                    className='relative aspect-[16/9] w-full overflow-hidden bg-bg'
                  >
                    {pro.images?.length ? (
                      <img
                        src={pro.images[0]}
                        alt={pro.title}
                        loading='lazy'
                        className='absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]'
                      />
                    ) : (
                      <span className='absolute inset-0 flex items-center justify-center text-ink-faint'>
                        No image
                      </span>
                    )}
                    {hasGallery && (
                      <span className='absolute bottom-3 right-3 rounded-md bg-bg/80 px-2 py-1 text-xs font-medium text-ink-muted backdrop-blur-sm'>
                        {pro.images.length} images
                      </span>
                    )}
                  </button>

                  <div className='flex flex-1 flex-col p-6'>
                    <h3 className='text-xl font-semibold text-ink'>{pro.title}</h3>
                    <p className='mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted'>
                      {pro.description}
                    </p>

                    {pro.tags?.length ? (
                      <ul className='mt-4 flex flex-wrap gap-2'>
                        {pro.tags.map((tag) => (
                          <li
                            key={tag}
                            className='rounded-md border border-line px-2 py-0.5 text-xs font-medium text-ink-faint'
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className='mt-6 flex flex-wrap gap-3 pt-2'>
                      <a
                        href={pro.webLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={() => play('openLink')}
                        onMouseEnter={() => play('hover')}
                        className='inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover'
                      >
                        <TbWorld className='text-base' />
                        Live site
                      </a>
                      {pro.gitLink && (
                        <a
                          href={pro.gitLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          onClick={() => play('openLink')}
                          onMouseEnter={() => play('hover')}
                          className='inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:border-line-strong hover:text-ink'
                        >
                          <FiGithub className='text-base' />
                          Source
                        </a>
                      )}
                      {hasGallery && (
                        <button
                          type='button'
                          onClick={() => { play('openCard'); setSelectedProject(pro) }}
                          onMouseEnter={() => play('hover')}
                          className='cursor-pointer inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:border-line-strong hover:text-ink'
                        >
                          <LuImages className='text-base' />
                          Images ({pro.images.length})
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery modal */}
      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role='dialog'
            aria-modal='true'
            aria-label={`${selectedProject.title} gallery`}
            className='fixed inset-0 z-50 flex items-center justify-center bg-bg/80 p-4 backdrop-blur-sm'
            onClick={() => { play('closeCard'); setSelectedProject(null) }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className='relative flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-surface'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex items-center justify-between border-b border-line px-6 py-4'>
                <h3 className='text-lg font-semibold text-ink'>{selectedProject.title}</h3>
                <button
                  type='button'
                  aria-label='Close gallery'
                  onClick={() => { play('closeCard'); setSelectedProject(null) }}
                  className='flex h-8 w-8 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink'
                >
                  <LuX />
                </button>
              </div>

              <div className='scrollbar-thin overflow-y-auto p-6'>
                <p className='mb-6 text-sm leading-relaxed text-ink-muted'>
                  {selectedProject.description}
                </p>
                <div className='grid gap-4 sm:grid-cols-2'>
                  {selectedProject.images.map((img, idx) => (
                    <GalleryImage
                      key={`${img.slice(0, 24)}-${idx}`}
                      src={img}
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
