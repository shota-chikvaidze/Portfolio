import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetProjects } from '../../api/endpoints/Project'
import { Loading } from '../../components/loading/Loading'
import { Link } from 'react-router-dom'

export const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null)

  const { data: projects = [], isLoading, isError } = useQuery({
    queryKey: ['get-project'],
    queryFn: () => GetProjects(),
  })

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
          <div className='mb-10'>
            <h1 className='text-4xl font-[600] tracking-tight text-white'>Projects</h1>
            <p className='mt-2 text-lg text-white/70'>Explore my recent work and side projects.</p>
          </div>

          {isLoading ? (
            <div className='flex min-h-[400px] items-center justify-center'>
              <Loading />
            </div>
          ) : projects.length === 0 ? (
            <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-8 py-12 text-center'>
              <p className='text-white/70'>No projects available yet. Check back soon!</p>
            </div>
          ) : (
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {projects.map((pro) => (
                <article
                  key={pro._id}
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
                </article>
              ))}
            </div>
          )}
          <div className='mt-10 text-center'>
            <p className='text-white/70 mb-2'>Want to see more of my work?</p>
            <a
              href='https://github.com/shota-chikvaidze'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block rounded-lg bg-white/5 border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10'
            >
              Check out more on my GitHub
            </a>
          </div>
        </div>
      </section>

      {selectedProject ? (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm'
          onClick={() => setSelectedProject(null)}
        >
          <div
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
                  <img
                    key={`${img.slice(0, 24)}-${idx}`}
                    src={img}
                    alt={`${selectedProject.title} image ${idx + 1}`}
                    className='w-full rounded-xl border border-white/10 object-cover'
                    loading='lazy'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
