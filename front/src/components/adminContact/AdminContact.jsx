import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getContact, deleteContact } from '../../api/endpoints/Contact'
import { Loading } from '../../components/loading/Loading'
import { MdDeleteOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

import toast from 'react-hot-toast';

export const AdminContact = () => {

    const [confirmDialog, setConfirmDialog] = useState(false)
    const [contactToDelete, setContactToDelete] = useState(null)
    const queryClient = useQueryClient()

    const { data: contacts = [], isError, isLoading } = useQuery({
      queryKey: ['get-contact'],
      queryFn: () => getContact()
    })


    const deleteMutation = useMutation({
      mutationKey: ['delete-contact'],
      mutationFn: (contactId) => deleteContact(contactId),
      onSuccess: async (data) => {
        toast.success(data.message)
        await queryClient.invalidateQueries({ queryKey: ['get-contact'] })
      },
      onError: (error) => {
        const errorMessage = error?.response?.data?.message
        if(errorMessage){
          toast.error(errorMessage)
        }else{
          toast.error('Something went wrong. Please try again.')
        }
      }
    })

    const handleDelete = (contactId) => {
      deleteMutation.mutate(contactId)
    }

    if (isError) {
      return (
        <main className='min-h-screen px-6 py-10 text-white'>
          <p className='text-white/80'>Error loading your contacts.</p>
        </main>
      )
    }

  return (
    <main className='mt-[20px] '>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='mb-6 flex items-center justify-between gap-4'>
          <div>
            <h1 className='text-2xl font-[600] text-white/70 tracking-tight'>Contacts</h1>
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
          {isLoading ? (
            <div className='px-5 py-10'>
              <Loading />
            </div>
          ) : contacts.length === 0 ? (
            <div className='px-5 py-10 text-center text-sm text-white/70'>No contacts yet.</div>
          ) : (
            <div className='overflow-x-auto scrollbar-glass max-h-[630px] overflow-y-auto '>
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
                          // onClick={() => handleDelete(con._id)}
                          onClick={() => {
                            setContactToDelete(con)
                            setConfirmDialog(true)
                          }}
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

      {confirmDialog && contactToDelete && (
        <div 
          onClick={() => {
            setConfirmDialog(false)
            setContactToDelete(null)
          }}
          className='flex items-center justify-center fixed h-full w-full top-0 left-0 bg-black/70 z-50'
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className='bg-[var(--bg-dark)]/95 backdrop-blur border border-white/10 rounded-2xl p-6 w-[450px] max-w-[90vw]'
          >
            <div className='flex items-start justify-between mb-4'>
              <div>
                <h2 className='text-white text-xl font-[600] mb-1'>Delete Project</h2>
                <p className='text-white/60 text-sm'>This action cannot be undone</p>
              </div>
              <button
                onClick={() => {
                  setConfirmDialog(false)
                  setContactToDelete(null)
                }}
                className='text-white/60 hover:text-white transition p-1 rounded-lg hover:bg-white/10'
                aria-label='Close dialog'
              >
                <RxCross2 className='w-5 h-5' />
              </button>
            </div>

            <div className='mb-6 p-4 rounded-xl bg-white/5 border border-white/10'>
              <p className='text-white/90 mb-2'>
                Are you sure you want to delete <span className='font-[600] bg-[var(--accent)]'>"{contactToDelete.name}"</span>?
              </p>
              <p className='text-white/60 text-sm'>
                All project data including images will be permanently removed.
              </p>
            </div>

            <div className='flex gap-3 justify-end'>
              <button
                onClick={() => {
                  setConfirmDialog(false)
                  setContactToDelete(null)
                }}
                className='px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white/90 font-[500] transition hover:bg-white/10'
                disabled={handleDelete.isPending}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete(contactToDelete._id)
                  setConfirmDialog(false)
                  setContactToDelete(null)
                }}
                disabled={handleDelete.isPending}
                className='px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 font-[500] transition hover:bg-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
              >
                <MdDeleteOutline className='w-5 h-5' />
                {handleDelete.isPending ? 'Deleting...' : 'Delete Project'}
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}