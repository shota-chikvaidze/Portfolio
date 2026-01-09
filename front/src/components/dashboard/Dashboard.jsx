import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetProjects } from '../../api/endpoints/Project'
import { getContact } from '../../api/endpoints/Contact'
import { Loading } from '../loading/Loading'
import { MdEmail, MdWork } from "react-icons/md"

export const Dashboard = () => {
  
  const { data: contactsData = [], isLoading: contactsLoading, isError: contactsError  } = useQuery({
    queryKey: ['get-dashContacts'],
    queryFn: () => getContact()
  })

  const { data: projectsData = [], isLoading: projectsLoading, isError: projectsError  } = useQuery({
    queryKey: ['get-dashProjects'],
    queryFn: () => GetProjects()
  })

  const projects = projectsData.project || []
  const contacts = contactsData.contact || []

  const isLoading = contactsLoading || projectsLoading
  const hasError = contactsError || projectsError

  if (hasError) {
    return (
      <main className='min-h-screen px-6 py-10 text-[var(--text-primary)]'>
        <p className='text-[var(--text-secondary)]'>Error loading dashboard data.</p>
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
    <main className='min-h-screen px-6 py-10 text-[var(--text-primary)]'>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='mb-8'>
          <h1 className='text-3xl font-[600] tracking-tight'>Dashboard</h1>
          <p className='mt-1 text-sm text-[var(--text-secondary)]'>Welcome back! Here's your portfolio overview.</p>
        </div>

        <div className='mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2'>
          <div className='rounded-2xl border border-[var(--border-color)] bg-[var(--glass-overlay)] backdrop-blur p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-[var(--text-muted)]'>Total Contacts</p>
                <p className='mt-2 text-3xl font-[600] text-[var(--text-primary)]'>{contacts.length}</p>
              </div>
              <div className='rounded-xl bg-[var(--glass-overlay)] p-3'>
                <MdEmail className='h-6 w-6 text-[var(--text-secondary)]' />
              </div>
            </div>
          </div>

          <div className='rounded-2xl border border-[var(--border-color)] bg-[var(--glass-overlay)] backdrop-blur p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-[var(--text-muted)]'>Total Projects</p>
                <p className='mt-2 text-3xl font-[600] text-[var(--text-primary)]'>{projects.length}</p>
              </div>
              <div className='rounded-xl bg-[var(--glass-overlay)] p-3'>
                <MdWork className='h-6 w-6 text-[var(--text-secondary)]' />
              </div>
            </div>
          </div>
        </div>

        <div className='grid gap-6 lg:grid-cols-2'>

          <section className='rounded-2xl border border-[var(--border-color)] bg-[var(--glass-overlay)] backdrop-blur'>
            <div className='border-b border-[var(--border-color)] px-5 py-4'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-[600] text-[var(--text-primary)]'>Recent Contacts</h2>
                <span className='text-xs text-[var(--text-muted)]'>{contacts.length} total</span>
              </div>
            </div>

            <div className='p-5'>
              {contacts.length === 0 ? (
                <p className='py-8 text-center text-sm text-[var(--text-muted)]'>No contacts yet.</p>
              ) : (
                <div className='space-y-4'>
                  {contacts.slice(0, 3).map((con) => (
                    <div
                      key={con._id}
                      className='rounded-xl border border-[var(--border-color)] bg-[var(--glass-overlay)] p-4 transition hover:bg-[var(--glass-overlay)]/50'
                    >
                      <div className='flex items-start justify-between gap-3'>
                        <div className='flex-1 min-w-0'>
                          <p className='font-[600] text-[var(--text-primary)] truncate'>{con.name}</p>
                          <p className='text-sm text-[var(--text-secondary)] truncate'>{con.email}</p>
                          <p className='mt-2 line-clamp-2 text-sm text-[var(--text-secondary)]'>{con.message}</p>
                        </div>
                      </div>
                      {con.createdAt && (
                        <p className='mt-2 text-xs text-[var(--text-muted)]'>
                          {new Date(con.createdAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          <section className='rounded-2xl border border-[var(--border-color)] bg-[var(--glass-overlay)] backdrop-blur'>
            <div className='border-b border-[var(--border-color)] px-5 py-4'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-[600] text-[var(--text-primary)]'>Recent Projects</h2>
                <span className='text-xs text-[var(--text-muted)]'>{projects.length} total</span>
              </div>
            </div>

            <div className='p-5'>
              {projects.length === 0 ? (
                <p className='py-8 text-center text-sm text-[var(--text-muted)]'>No projects yet.</p>
              ) : (
                <div className='space-y-4'>
                  {projects.slice(0, 3).map((proj) => (
                    <div
                      key={proj._id}
                      className='rounded-xl border border-[var(--border-color)] bg-[var(--glass-overlay)] p-4 transition hover:bg-[var(--glass-overlay)]/50'
                    >
                      <div className='flex gap-4'>
                        {proj.image && proj.image.length > 0 ? (
                          <img
                            src={proj.image[0]}
                            alt={proj.title}
                            className='h-16 w-16 flex-none rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] object-cover'
                            loading='lazy'
                          />
                        ) : (
                          <div className='flex h-16 w-16 flex-none items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] text-xs text-[var(--text-muted)]'>
                            No img
                          </div>
                        )}
                        <div className='flex-1 min-w-0'>
                          <p className='font-[600] text-[var(--text-primary)] truncate'>{proj.title}</p>
                          <p className='mt-1 line-clamp-2 text-sm text-[var(--text-secondary)]'>{proj.description}</p>
                        </div>
                      </div>
                      {proj.createdAt && (
                        <p className='mt-2 text-xs text-[var(--text-muted)]'>
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
