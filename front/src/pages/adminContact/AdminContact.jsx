import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getContact, deleteContact } from '../../api/endpoints/Contact'
import { GetProjects, DeleteProject } from '../../api/endpoints/Project'
import { Loading } from '../../components/loading/Loading'
import { MdDeleteOutline } from "react-icons/md";

export const AdminContact = () => {

  const queryClient = useQueryClient()
  const [successMessage, setSuccessMessage] = useState('')
  const [successProjMessage, setSuccessProjMessage] = useState('')

  const { data: contacts = [], isError, isLoading } = useQuery({
    queryKey: ['get-contact'],
    queryFn: () => getContact()
  })
  const { data: projectData = [], isError: projectError, isLoading: projectLoading } = useQuery({
    queryKey: ['get-project'],
    queryFn: () => GetProjects()
  })


  const deleteMutation = useMutation({
    mutationKey: ['delete-contact'],
    mutationFn: (contactId) => deleteContact(contactId),
    onSuccess: async () => {
      setSuccessMessage('Contact deleted successfully!')
      await queryClient.invalidateQueries({ queryKey: ['get-contact'] })
    }
  })

  const handleDelete = (contactId) => {
    deleteMutation.mutate(contactId)
  }


  const deleteProjMutation = useMutation({
    mutationKey: ['delete-project'],
    mutationFn: (id) => DeleteProject(id),
    onSuccess: async () => {
      setSuccessProjMessage('Project Deleted successfully!')
      await queryClient.invalidateQueries({ queryKey: ['get-project'] })
    }
  })

  const handleProjDelete = (projectId) => {
    deleteProjMutation.mutate(projectId)
  }


  if (projectError) {
    return (
      <main className='min-h-screen px-6 py-10 text-white'>
        <p className='text-white/80'>Error loading your projects.</p>
      </main>
    )
  }

  if (isError) {
    return (
      <main className='min-h-screen px-6 py-10 text-white'>
        <p className='text-white/80'>Error loading your contacts.</p>
      </main>
    )
  }


  return (
    <>
      <main className='min-h-screen flex flex-col justify-between px-6 py-10 text-white'>
        <div className='mx-auto w-full max-w-6xl'>
          <div className='mb-6 flex items-center justify-between gap-4'>
            <div>
              <h1 className='text-2xl font-[600] tracking-tight'>Contacts</h1>
              <p className='mt-1 text-sm text-white/70'>Messages sent through your portfolio contact form.</p>
            </div>


          </div>

          <section className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur'>
            <div className='border-b border-white/10 px-5 py-4'>
              <div className='flex items-center justify-between gap-3'>
                <h2 className='text-sm font-[600] text-white/90'>Inbox</h2>
                <span className='text-xs text-white/60'>{contacts.length} total</span>
              </div>
            </div>

            {successMessage ? (
              <div className='border-b border-white/10 px-5 py-3 text-sm text-white/80'>
                {successMessage}
              </div>
            ) : null}

            {isLoading ? (
              <div className='px-5 py-10'>
                <Loading />
              </div>
            ) : contacts.length === 0 ? (
              <div className='px-5 py-10 text-center text-sm text-white/70'>No contacts yet.</div>
            ) : (
              <div className='overflow-x-auto'>
                <table className='w-full min-w-[760px] table-auto border-separate border-spacing-0 text-left text-sm'>
                  <thead>
                    <tr className='text-xs uppercase tracking-wider text-white/60'>
                      <th className='whitespace-nowrap px-5 py-4 font-[600]'>Name</th>
                      <th className='whitespace-nowrap px-5 py-4 font-[600]'>Email</th>
                      <th className='px-5 py-4 font-[600]'>Message</th>
                      <th className='whitespace-nowrap px-5 py-4 font-[600]'>Date</th>
                      <th className='whitespace-nowrap px-5 py-4 font-[600]'>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((con) => (
                      <tr
                        key={con._id ?? `${con.email}-${con.createdAt}`}
                        className='border-t border-white/10 transition hover:bg-white/5'
                      >
                        <td className='px-5 py-4 align-top font-[600] text-white/90'>{con.name}</td>
                        <td className='px-5 py-4 align-top text-white/80'>
                          <a className='hover:underline' href={`mailto:${con.email}`}>
                            {con.email}
                          </a>
                        </td>
                        <td className='px-5 py-4 align-top text-white/80'>
                          <div className='max-w-[560px] whitespace-pre-wrap break-words'>
                            {con.message}
                          </div>
                        </td>
                        <td className='px-5 py-4 align-top text-white/70'>
                          {con.createdAt ? new Date(con.createdAt).toLocaleString() : '—'}
                        </td>
                        <td className='px-5 py-4 align-top text-white/70'>
                          <button
                            type='button'
                            className='cursor-pointer rounded-md border border-white/10 p-1 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50'
                            onClick={() => handleDelete(con._id)}
                            disabled={deleteMutation.isPending}
                            aria-label='Delete contact'
                          >
                            <MdDeleteOutline className='h-[20px] w-[20px]' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>


        <div className='mx-auto mb-[50px] w-full max-w-6xl'>
          <div className='mb-6 flex items-center justify-between gap-4'>
            <div>
              <h1 className='text-2xl font-[600] tracking-tight'>Projects</h1>
              <p className='mt-1 text-sm text-white/70'>Projects currently listed on your portfolio.</p>
            </div>
          </div>

          <section className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur'>
            <div className='border-b border-white/10 px-5 py-4'>
              <div className='flex items-center justify-between gap-3'>
                <h2 className='text-sm font-[600] text-white/90'>Inbox</h2>
                <span className='text-xs text-white/60'>{projectData.length} total</span>
              </div>
            </div>

            {successProjMessage ? (
              <div className='border-b border-white/10 px-5 py-3 text-sm text-white/80'>
                {successProjMessage}
              </div>
            ) : null}

            {projectLoading ? (
              <div className='px-5 py-10'>
                <Loading />
              </div>
            ) : projectData.length === 0 ? (
              <div className='px-5 py-10 text-center text-sm text-white/70'>No projects yet.</div>
            ) : (
              <div className='overflow-x-auto'>
                <table className='w-full min-w-[760px] table-auto border-separate border-spacing-0 text-left text-sm'>
                  <thead>
                    <tr className='text-xs uppercase tracking-wider text-white/60'>
                      <th className='whitespace-nowrap px-5 py-4 font-[600]'>Image</th>
                      <th className='whitespace-nowrap px-5 py-4 font-[600]'>Name</th>
                      <th className='px-5 py-4 font-[600]'>Description</th>
                      <th className='whitespace-nowrap px-5 py-4 font-[600]'>Date</th>
                      <th className='whitespace-nowrap px-5 py-4 font-[600]'>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projectData.map((pro) => (
                      <tr
                        key={pro._id ?? `${pro.createdAt}`}
                        className='border-t border-white/10 transition hover:bg-white/5'
                      >
                        <td className='px-5 py-4 align-top font-[600] text-white/90'> 

                          <div>
                            {pro.image.map((img) => (
                              <img src={img} alt='Project images' />
                            ))}
                          </div>

                        </td>
                        <td className='px-5 py-4 align-top font-[600] text-white/90'>{pro.title}</td>
                        <td className='px-5 py-4 align-top text-white/80'>
                          <div className='max-w-[560px] whitespace-pre-wrap break-words'>
                            {pro.description}
                          </div>
                        </td>
                        <td className='px-5 py-4 align-top text-white/70'>
                          {pro.createdAt ? new Date(pro.createdAt).toLocaleString() : '—'}
                        </td>
                        <td className='px-5 py-4 align-top text-white/70'>
                          <button
                            type='button'
                            className='cursor-pointer rounded-md border border-white/10 p-1 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50'
                            onClick={() => handleProjDelete(pro._id)}
                            disabled={deleteProjMutation.isPending}
                            aria-label='Delete contact'
                          >
                            <MdDeleteOutline className='h-[20px] w-[20px]' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>

      </main>
    </>
  )
}
