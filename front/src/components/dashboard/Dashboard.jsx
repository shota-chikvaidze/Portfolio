import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetProjects } from '../../api/endpoints/Project'
import { getContact } from '../../api/endpoints/Contact'
import { Loading } from '../loading/Loading'
import { MdEmail, MdWork, MdVisibility } from "react-icons/md"

export const Dashboard = () => {
  
  const { data: contacts = [], isLoading: contactsLoading, isError: contactsError  } = useQuery({
    queryKey: ['get-dashContacts'],
    queryFn: () => getContact()
  })

  const { data: projects = [], isLoading: projectsLoading, isError: projectsError  } = useQuery({
    queryKey: ['get-dashProjects'],
    queryFn: () => GetProjects()
  })

  const isLoading = contactsLoading || projectsLoading
  const hasError = contactsError || projectsError

  if (hasError) {
    return (
      <main className='min-h-screen px-6 py-10 text-white'>
        <p className='text-white/80'>Error loading dashboard data.</p>
      </main>
    )
  }

  if (isLoading) {
    return (
      <main className='min-h-screen flex items-center justify-center'>
        <Loading />
      </main>
    )
  }

  return (
    <main className='min-h-screen px-6 py-10 text-white'>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='mb-8'>
          <h1 className='text-3xl font-[600] tracking-tight'>Dashboard</h1>
          <p className='mt-1 text-sm text-white/70'>Welcome back! Here's your portfolio overview.</p>
        </div>

        <div className='mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2'>
          <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-white/60'>Total Contacts</p>
                <p className='mt-2 text-3xl font-[600] text-white'>{contacts.length}</p>
              </div>
              <div className='rounded-xl bg-white/10 p-3'>
                <MdEmail className='h-6 w-6 text-white/80' />
              </div>
            </div>
          </div>

          <div className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-white/60'>Total Projects</p>
                <p className='mt-2 text-3xl font-[600] text-white'>{projects.length}</p>
              </div>
              <div className='rounded-xl bg-white/10 p-3'>
                <MdWork className='h-6 w-6 text-white/80' />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Contacts & Projects Side by Side */}
        <div className='grid gap-6 lg:grid-cols-2'>
          {/* Recent Contacts */}
          <section className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur'>
            <div className='border-b border-white/10 px-5 py-4'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-[600] text-white/90'>Recent Contacts</h2>
                <span className='text-xs text-white/60'>{contacts.length} total</span>
              </div>
            </div>

            <div className='p-5'>
              {contacts.length === 0 ? (
                <p className='py-8 text-center text-sm text-white/60'>No contacts yet.</p>
              ) : (
                <div className='space-y-4'>
                  {contacts.slice(0, 3).map((con) => (
                    <div
                      key={con._id}
                      className='rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10'
                    >
                      <div className='flex items-start justify-between gap-3'>
                        <div className='flex-1 min-w-0'>
                          <p className='font-[600] text-white/90 truncate'>{con.name}</p>
                          <p className='text-sm text-white/70 truncate'>{con.email}</p>
                          <p className='mt-2 line-clamp-2 text-sm text-white/80'>{con.message}</p>
                        </div>
                      </div>
                      {con.createdAt && (
                        <p className='mt-2 text-xs text-white/50'>
                          {new Date(con.createdAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Recent Projects */}
          <section className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur'>
            <div className='border-b border-white/10 px-5 py-4'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-[600] text-white/90'>Recent Projects</h2>
                <span className='text-xs text-white/60'>{projects.length} total</span>
              </div>
            </div>

            <div className='p-5'>
              {projects.length === 0 ? (
                <p className='py-8 text-center text-sm text-white/60'>No projects yet.</p>
              ) : (
                <div className='space-y-4'>
                  {projects.slice(0, 3).map((proj) => (
                    <div
                      key={proj._id}
                      className='rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10'
                    >
                      <div className='flex gap-4'>
                        {proj.image && proj.image.length > 0 ? (
                          <img
                            src={proj.image[0]}
                            alt={proj.title}
                            className='h-16 w-16 flex-none rounded-lg border border-white/10 bg-white/5 object-cover'
                            loading='lazy'
                          />
                        ) : (
                          <div className='flex h-16 w-16 flex-none items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs text-white/40'>
                            No img
                          </div>
                        )}
                        <div className='flex-1 min-w-0'>
                          <p className='font-[600] text-white/90 truncate'>{proj.title}</p>
                          <p className='mt-1 line-clamp-2 text-sm text-white/70'>{proj.description}</p>
                        </div>
                      </div>
                      {proj.createdAt && (
                        <p className='mt-2 text-xs text-white/50'>
                          {new Date(proj.createdAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
