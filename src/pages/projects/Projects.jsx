import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { play } from '../../utils/sounds'

import projects from '../../data/Projects'

export const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section className='min-h-[calc(100vh-70px)] w-full px-4 py-14' id='projects' >
        <div className='mx-auto w-full max-w-6xl'>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='mb-10 px-3'
          >
            <h1 className='text-4xl sm:text-5xl font-[700] mb-2 tracking-tight text-[var(--text-white)]'>My projects</h1>
            <p className='mt-2 text-lg text-[var(--text-secondary)]'>Check out some cool things I've built!</p>
          </motion.div>

          { projects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='rounded-2xl border border-[var(--border-color)] bg-[var(--glass-overlay)] backdrop-blur px-8 py-12 text-center'
            >
              <p className='text-[var(--text-secondary)]'>No projects available yet. Check back soon!</p>
            </motion.div>
          ) : (
            <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2'>
              {projects.map((pro, index) => (
                <motion.article
                  key={pro._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onMouseEnter={() => play('cardHover')}
                  onClick={() => play('cardClick')}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className='group m-2 hover:scale-102 transition duration-400 shadow-2xl shadow-black/50 rounded-2xl '

                >
                  <div className='p-5'>

                    <div className='relative w-full overflow-hidden rounded-2xl mb-4 aspect-[16/9]'>
                      {pro.images && pro.images.length > 0 ? (
                        <img
                          src={pro.images[0]}
                          alt={pro.title || 'Project image'}
                          className='absolute inset-0 h-full w-full object-cover'
                          loading='lazy'
                        />
                      ) : (
                        <div className='absolute inset-0 flex items-center justify-center bg-[var(--glass-overlay)] text-[var(--text-muted)]'>
                          No image
                        </div>
                      )}
                    </div>


                    <h2 className='mb-2 text-xl font-[600] text-[var(--text-white)]'>{pro.title}</h2>
                    <p className='line-clamp-3 text-sm text-[var(--text-primary))]'>{pro.description}</p>
                    
                    <div className='flex mt-4 gap-2 xs:gap-4 flex-col xs:flex-row '>

                      <Link 
                        to={pro.gitLink} 
                        target='_blank' 
                        onClick={() => play('openLink')} 
                        onMouseEnter={() => play('hover')}
                        className='flex items-center justify-center gap-4 cursor-pointer rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] px-4 py-2 text-sm font-[500] text-[var(--text-secondary)] transition hover:bg-[var(--glass-overlay)]/50'
                      > 
                        <FiGithub />
                        View source
                      </Link>

                      <Link 
                        to={pro.webLink} 
                        target='_blank' 
                        onClick={() => play('openLink')}
                        onMouseEnter={() => play('hover')}
                        className='flex items-center justify-center gap-4 cursor-pointer rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] px-4 py-2 text-sm font-[500] text-[var(--text-secondary)] transition hover:bg-[var(--glass-overlay)]/50'
                      > 
                        <TbWorld />
                        View website
                      </Link>

                      {pro.images && pro.images.length > 1 ? (
                        <button
                          type='button'
                          onClick={() => { play('openCard'); setSelectedProject(pro); }}
                          onMouseEnter={() => play('hover')}
                          className=' cursor-pointer rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] px-4 py-2 text-sm font-[500] text-[var(--text-secondary)] transition hover:bg-[var(--glass-overlay)]/50'
                        >
                          View all images ({pro.images.length})
                        </button>
                      ) : null}

                    </div>

                  </div>
                </motion.article>
              ))}
            </div>

          )}
        
        </div>
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-[var(--modal-overlay)] p-4 backdrop-blur-sm'
            onClick={() => { play('closeCard'); setSelectedProject(null) }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='relative w-full max-w-4xl rounded-2xl border border-white/10 bg-[var(--bg-primary)]/75 backdrop-blur'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex items-center justify-between border-b border-[var(--border-color)] px-6 py-4'>
                <h3 className='text-xl font-[600] text-[var(--text-white)]'>{selectedProject.title}</h3>

                <button
                  type='button'
                   onClick={() => { play('closeCard'); setSelectedProject(null); }}
                  className='cursor-pointer rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] px-3 py-1 text-sm font-[500] text-[var(--text-secondary)] transition hover:bg-[var(--glass-overlay)]/50'
                >
                  Close
                </button>
              </div>

              <div className='max-h-[70vh] overflow-y-auto scrollbar-glass p-6'>
                <p className='mb-6 text-[var(--text-secondary)]'>{selectedProject.description}</p>

                <div className='grid gap-4 sm:grid-cols-2'>
                  {selectedProject.images.map((img, idx) => (
                    <motion.img
                      key={`${img.slice(0, 24)}-${idx}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      src={img}
                      alt={`${selectedProject.title} image ${idx + 1}`}
                      className='w-full rounded-xl border border-[var(--border-color)] object-cover'
                      loading='lazy'
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
