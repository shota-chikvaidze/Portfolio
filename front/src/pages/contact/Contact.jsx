import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { postContact } from '../../api/endpoints/Contact'

export const Contact = () => {

  const [postForm, setPostForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [successMes, setSuccessMes] = useState('')

  const handleChange = (e) => {
    setPostForm({...postForm, [e.target.name]: e.target.value})
  }

  const contactMutate = useMutation({
    mutationKey: ['post-contact'],
    mutationFn: () => postContact(postForm),
    onSuccess: () => {
      setSuccessMes('Message sent successfully!')
      setPostForm({ name: '', email: '', message: '' }) 
    }  
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    contactMutate.mutate()
  }

  return (
    <section className='w-full flex justify-center px-4 py-14 min-h-[calc(100vh-70px)]'>
      <div className='w-full max-w-[720px]'>
        <div className='mb-7'>
          <h2 className='text-[#fff] text-[2rem] font-[600] tracking-wide'>Contact</h2>
          <p className='text-white/70 mt-2'>Send me a message and I’ll get back to you.</p>
        </div>

        <div className='bg-[#1c112d]/30 backdrop-blur-md border border-white/10 rounded-2xl p-7 shadow-md'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='flex flex-col gap-2'>
                <label className='text-white/80 text-[0.95rem]'>Name</label>
                <input
                  name='name'
                  type='text'
                  placeholder='Your name'
                  onChange={handleChange}
                  value={postForm.name}
                  className='w-full rounded-xl bg-transparent border border-white/15 px-4 py-3 text-[#fff] placeholder:text-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-[#8E6AFB]/40'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label className='text-white/80 text-[0.95rem]'>Email</label>
                <input
                  name='email'
                  type='email'
                  placeholder='Your email'
                  onChange={handleChange}
                  value={postForm.email}
                  className='w-full rounded-xl bg-transparent border border-white/15 px-4 py-3 text-[#fff] placeholder:text-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-[#8E6AFB]/40'
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-white/80 text-[0.95rem]'>Message</label>
              <textarea
                name='message'
                onChange={handleChange}
                placeholder='Write your message...'
                value={postForm.message}
                rows={6}
                className='w-full rounded-xl bg-transparent border border-white/15 px-4 py-3 text-[#fff] placeholder:text-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-[#8E6AFB]/40 resize-none'
              />
            </div>

            <div className='flex items-center justify-between gap-4 flex-wrap'>
              <p className='text-white/70 text-[0.95rem]'>
                {contactMutate.isPending ? 'Sending…' : successMes}
              </p>

              <button
                type='submit'
                disabled={contactMutate.isPending}
                className='rounded-xl px-6 py-3 text-[#fff] text-[1rem] font-[500] bg-[#8E6AFB] hover:opacity-90 transition-opacity disabled:opacity-60'
              >
                Send message
              </button>
            </div>

            {contactMutate.isError && (
              <p className='text-white/80 text-[0.95rem]'>
                {contactMutate.error?.response?.data?.message || 'Something went wrong. Try again.'}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
