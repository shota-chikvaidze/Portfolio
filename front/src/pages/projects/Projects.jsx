import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetProjects } from '../../api/endpoints/Project'
import { Loading } from '../../components/loading/Loading'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['get-project',],
    queryFn: () => GetProjects(),
    keepPreviousData: true
  })

  const projects = data?.project || []


  if (isError) {
    return (
      <section className='min-h-[calc(100vh-70px)] w-full flex items-center justify-center px-4 py-14'>
        <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-8 py-6'>
          <p className='text-white/80'>Failed to load projects. Please try again later.</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className='min-h-[calc(100vh-70px)] w-full px-4 py-14'>
        <div className='mx-auto w-full max-w-7xl'>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='mb-10'
          >
            <h1 className='text-4xl font-[600] tracking-tight text-white'>Projects</h1>
            <p className='mt-2 text-lg text-white/70'>Explore my recent work and side projects.</p>
          </motion.div>

          {isLoading ? (
            <div className='flex min-h-[400px] items-center justify-center'>
              <Loading />
            </div>
          ) : projects.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-8 py-12 text-center'
            >
              <p className='text-white/70'>No projects available yet. Check back soon!</p>
            </motion.div>
          ) : (
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {projects.map((pro, index) => (
                <motion.article
                  key={pro._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className='group rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-white/20 hover:bg-white/10'
                >
                  <div className='overflow-hidden rounded-t-2xl'>
                    {pro.image && pro.image.length > 0 ? (
                      <img
                        src={pro.image[0]}
                        alt={pro.title || 'Project image'}
                        className='h-[220px] w-full object-cover transition duration-300 group-hover:scale-105'
                        loading='lazy'
                      />
                    ) : (
                      <div className='flex h-[220px] w-full items-center justify-center bg-white/5 text-white/40'>
                        No image
                      </div>
                    )}
                  </div>

                  <div className='p-5'>
                    <h2 className='mb-2 text-xl font-[600] text-white'>{pro.title}</h2>
                    <p className='line-clamp-3 text-sm text-white/70'>{pro.description}</p>
                    <Link to={pro.gitLink} target='_blank' className='mt-3 line-clamp-3 text-sm text-white'  >{pro.gitLink}</Link>

                    {pro.image && pro.image.length > 1 ? (
                      <button
                        type='button'
                        onClick={() => setSelectedProject(pro)}
                        className='mt-4 cursor-pointer rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-[500] text-white/90 transition hover:bg-white/10'
                      >
                        View all images ({pro.image.length})
                      </button>
                    ) : null}
                  </div>
                </motion.article>
              ))}
              
            </div>
            
          )}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className='mt-10 text-center'
          >
            <p className='text-white/70 mb-2'>Want to see more of my work?</p>
            <a
              href='https://github.com/shota-chikvaidze'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block rounded-lg bg-white/5 border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10'
            >
              Check out more on my GitHub
            </a>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm'
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className='relative w-full max-w-4xl rounded-2xl border border-white/10 bg-[#1c112d]/95 backdrop-blur'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='flex items-center justify-between border-b border-white/10 px-6 py-4'>
                <h3 className='text-xl font-[600] text-white'>{selectedProject.title}</h3>
                <button
                  type='button'
                  onClick={() => setSelectedProject(null)}
                  className='cursor-pointer rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm font-[500] text-white/90 transition hover:bg-white/10'
                >
                  Close
                </button>
              </div>

              <div className='max-h-[70vh] overflow-y-auto scrollbar-glass p-6'>
                <p className='mb-6 text-white/80'>{selectedProject.description}</p>

                <div className='grid gap-4 sm:grid-cols-2'>
                  {selectedProject.image.map((img, idx) => (
                    <motion.img
                      key={`${img.slice(0, 24)}-${idx}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
                      src={img}
                      alt={`${selectedProject.title} image ${idx + 1}`}
                      className='w-full rounded-xl border border-white/10 object-cover'
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
