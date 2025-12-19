import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { GetProjects, DeleteProject } from '../../api/endpoints/Project'
import { Loading } from '../../components/loading/Loading'
import { MdDeleteOutline } from "react-icons/md";

export const AdminProject = () => {

  const queryClient = useQueryClient()
  const [successProjMessage, setSuccessProjMessage] = useState('')

  const { data: projectData = [], isError: projectError, isLoading: projectLoading } = useQuery({
    queryKey: ['get-project'],
    queryFn: () => GetProjects()
  })

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

  return (
    <main className='mt-[20px] '>

      <div className='mx-auto w-full max-w-6xl'>
        <div className='mb-6 flex items-center justify-between gap-4'>
          <div>
            <h1 className='text-2xl text-white/70 font-[600] tracking-tight'>Projects</h1>
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
            <div className='overflow-x-auto scrollbar-glass max-h-[630px] overflow-y-auto'>
              <table className='w-full min-w-[760px] table-auto borer-separate border-spacing-0 text-left text-sm'>
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
                          {pro.image.length === 0 ? (
                            <div className='inline-flex h-[130px] w-[100px] items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs text-white/60'>
                              No image
                            </div>
                          ) : (
                            <div className='flex max-w-[100px] gap-2 overflow-x-auto scrollbar-glass'>
                              {pro.image.map((img) => (
                                <img
                                  key={img}
                                  src={img}
                                  alt='Project images'
                                  className='h-[130px] w-[100px] flex-none rounded-xl border border-white/10 bg-white/5 object-cover'
                                  loading='lazy'
                                />
                              ))}
                            </div>
                          )}
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
  )
}
