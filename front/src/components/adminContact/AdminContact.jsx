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

    const { data: contactsData = [], isError, isLoading } = useQuery({
      queryKey: ['get-contact'],
      queryFn: () => getContact()
    })

    const contacts = contactsData.contact || []


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
        <main className='min-h-screen px-6 py-10 text-[var(--text-primary)]'>
          <p className='text-[var(--text-secondary)]'>Error loading your contacts.</p>
        </main>
      )
    }

  return (
    <main className='mt-[20px] '>
      <div className='mx-auto w-full max-w-6xl'>
        <div className='mb-6 flex items-center justify-between gap-4'>
          <div>
            <h1 className='text-2xl font-[600] text-[var(--text-primary)] tracking-tight'>Contacts</h1>
            <p className='mt-1 text-sm text-[var(--text-secondary)]'>Messages sent through your portfolio contact form.</p>
          </div>
        </div>

        <section className='rounded-2xl border border-[var(--border-color)] bg-[var(--glass-overlay)] backdrop-blur'>
          <div className='border-b border-[var(--border-color)] px-5 py-4'>
            <div className='flex items-center justify-between gap-3'>
              <h2 className='text-sm font-[600] text-[var(--text-primary)]'>Inbox</h2>
              <span className='text-xs text-[var(--text-muted)]'>{contacts.length} total</span>
            </div>
          </div>
          {isLoading ? (
            <div className='px-5 py-10'>
              <Loading />
            </div>
          ) : contacts.length === 0 ? (
            <div className='px-5 py-10 text-center text-sm text-[var(--text-secondary)]'>No contacts yet.</div>
          ) : (
            <div className='overflow-x-auto scrollbar-glass max-h-[630px] overflow-y-auto '>
              <table className='w-full min-w-[760px] table-auto border-separate border-spacing-0 text-left text-sm'>
                <thead>
                  <tr className='text-xs uppercase tracking-wider text-[var(--text-muted)]'>
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
                      className='border-t border-[var(--border-color)] transition hover:bg-[var(--glass-overlay)]'
                    >
                      <td className='px-5 py-4 align-top font-[600] text-[var(--text-primary)]'>{con.name}</td>
                      <td className='px-5 py-4 align-top text-[var(--text-secondary)]'>
                        <a className='hover:underline' href={`mailto:${con.email}`}>
                          {con.email}
                        </a>
                      </td>
                      <td className='px-5 py-4 align-top text-[var(--text-secondary)]'>
                        <div className='max-w-[560px] whitespace-pre-wrap break-words'>
                          {con.message}
                        </div>
                      </td>
                      <td className='px-5 py-4 align-top text-[var(--text-secondary)]'>
                        {con.createdAt ? new Date(con.createdAt).toLocaleString() : '—'}
                      </td>
                      <td className='px-5 py-4 align-top text-[var(--text-secondary)]'>
                        <button
                          type='button'
                          className='cursor-pointer rounded-md border border-[var(--border-color)] p-1 transition hover:bg-[var(--glass-overlay)] disabled:cursor-not-allowed disabled:opacity-50'
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
          className='flex items-center justify-center fixed h-full w-full top-0 left-0 bg-[var(--modal-overlay)] z-50'
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className='bg-[var(--bg-primary)]/65 backdrop-blur border border-[var(--border-color)] rounded-2xl p-6 w-[450px] max-w-[90vw]'
          >
            <div className='flex items-start justify-between mb-4'>
              <div>
                <h2 className='text-[var(--text-primary)] text-xl font-[600] mb-1'>Delete Project</h2>
                <p className='text-[var(--text-secondary)] text-sm'>This action cannot be undone</p>
              </div>
              <button
                onClick={() => {
                  setConfirmDialog(false)
                  setContactToDelete(null)
                }}
                className='text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition p-1 rounded-lg hover:bg-[var(--glass-overlay)]'
                aria-label='Close dialog'
              >
                <RxCross2 className='w-5 h-5' />
              </button>
            </div>

            <div className='mb-6 p-4 rounded-xl bg-[var(--glass-overlay)] border border-[var(--border-color)]'>
              <p className='text-[var(--text-primary)] mb-2'>
                Are you sure you want to delete <span className='font-[600] bg-[var(--accent)]'>"{contactToDelete.name}"</span>?
              </p>
              <p className='text-[var(--text-secondary)] text-sm'>
                All project data including images will be permanently removed.
              </p>
            </div>

            <div className='flex gap-3 justify-end'>
              <button
                onClick={() => {
                  setConfirmDialog(false)
                  setContactToDelete(null)
                }}
                className='px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] text-[var(--text-primary)] font-[500] transition hover:bg-[var(--glass-overlay)]/50'
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