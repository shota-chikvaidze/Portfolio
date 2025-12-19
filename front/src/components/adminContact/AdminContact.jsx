import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getContact, deleteContact } from '../../api/endpoints/Contact'
import { Loading } from '../../components/loading/Loading'
import { MdDeleteOutline } from "react-icons/md";

export const AdminContact = () => {

    const [successMessage, setSuccessMessage] = useState('')
    const queryClient = useQueryClient()

    const { data: contacts = [], isError, isLoading } = useQuery({
      queryKey: ['get-contact'],
      queryFn: () => getContact()
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
    </main>
  )
}