import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { postContact } from '../../api/endpoints/Contact'
import ContactExtras from '../../components/contactExtras/ContactExtras'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

export const Contact = () => {

  const [postForm, setPostForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setPostForm({...postForm, [e.target.name]: e.target.value})
  }

  const contactMutate = useMutation({
    mutationKey: ['post-contact'],
    mutationFn: () => postContact(postForm),
    onSuccess: (data) => {
      toast.success(data.message)
      setPostForm({ name: '', email: '', message: '' })
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message
      if(errorMessage) {
        toast.error(errorMessage)
      }else {
        toast.error('Something went wrong. Please try again.')
      }
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    contactMutate.mutate()
  }

  return (
    <section className='w-full flex justify-center px-4 py-14 min-h-[calc(100vh-70px)]'>
      <div className='w-full max-w-5xl'>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='mb-7'
        >
          <h2 className='text-[var(--text-white)] text-[2rem] font-[700] tracking-wide'>Contact</h2>
          <p className='text-[var(--text-muted)] mt-2'>Send a message, or choose another way to connect below.</p>
        </motion.div>

        <div className='flex flex-col'>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='bg-[linear-gradient(180deg,var(--glass-overlay), var(--glass-overlay))] border border-[var(--border-color)] rounded-[var(--radius-lg)] max-h-[430px] p-6 mb-10'
          >
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className='flex flex-col gap-2'
                >
                  <label className='text-[var(--text-secondary)] font-[500] text-[0.95rem]'>Name</label>
                  <input
                    name='name'
                    type='text'
                    placeholder='Your name'
                    onChange={handleChange}
                    value={postForm.name}
                    required
                    className='w-full rounded-xl bg-transparent border border-[var(--border-color)] px-4 py-3 text-[var(--text-white)] placeholder:text-[var(--text-text-[var(--text-muted)])] outline-none focus:border-[var(--border-color)]/50 focus:ring-2 focus:ring-accent/30'
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className='flex flex-col gap-2'
                >
                  <label className='text-[var(--text-secondary)] font-[500] text-[0.95rem]'>Email</label>
                  <input
                    name='email'
                    type='email'
                    placeholder='Your email'
                    onChange={handleChange}
                    value={postForm.email}
                    className='w-full rounded-xl bg-transparent border border-[var(--border-color)] px-4 py-3 text-[var(--text-white)] placeholder:text-[var(--text-text-[var(--text-muted)])] outline-none focus:border-[var(--border-color)]/50 focus:ring-2 focus:ring-accent/30'
                  />
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='flex flex-col gap-2'
              >
                <div className='flex items-center justify-between'>
                  <label className='text-[var(--text-secondary)] font-[500] text-[0.95rem]'>Message</label>
                  <span className={`text-[0.85rem] transition-colors ${
                    postForm.message.length >= 500 ? 'text-red-400' : 
                    postForm.message.length >= 450 ? 'text-yellow-400' :
                    'text-[var(--text-muted)]'
                  }`}>
                    {postForm.message.length} / 500
                  </span>
                </div>
                <textarea
                  name='message'
                  onChange={handleChange}
                  placeholder='Write your message...'
                  value={postForm.message}
                  rows={6}
                  className='w-full rounded-xl bg-transparent border border-[var(--border-color)] px-4 py-3 text-[var(--text-white)] placeholder:text-[var(--text-text-[var(--text-muted)])] outline-none focus:border-[var(--border-color)]/50 focus:ring-2 focus:ring-accent/30 resize-none'
                />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='flex items-center justify-end gap-4 flex-wrap'
              >
                <button
                  type='submit'
                  disabled={contactMutate.isPending}
                  className='rounded-xl px-6 py-3 text-[var(--text-primary)] text-[1rem] font-[500] bg-[var(--bg-accent)]/50 cursor-pointer hover:opacity-95 transition-opacity disabled:opacity-60'
                >
                  {contactMutate.isPending ? 'Sending…' : 'Send message'}
                </button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ContactExtras />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
