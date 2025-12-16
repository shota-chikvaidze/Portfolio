import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { PostProject as PostProjectApi } from '../../api/endpoints/Project'

const PostProject = () => {

    const [projectForm, setProjectForm] = useState({
        title: '',
        description: '',
        image: []
    })
    const [successMessage, setSuccessMessage] = useState('')

    const clearSuccess = () => {
        if (successMessage) setSuccessMessage('')
    }

    const handleChange = (e) => {
        clearSuccess()
        setProjectForm({...projectForm, [e.target.name]: e.target.value})
    }

    const readFileAsDataURL = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result)
            reader.onerror = () => reject(new Error('Failed to read file'))
            reader.readAsDataURL(file)
        })

    const handleFileChange = async (e) => {
        clearSuccess()
        const files = Array.from(e.target.files || [])
        if (files.length === 0) {
            setProjectForm((prev) => ({ ...prev, image: [] }))
            return
        }

        const images = await Promise.all(files.map(readFileAsDataURL))
        setProjectForm((prev) => ({ ...prev, image: images }))
    }

    const postMutation = useMutation({
        mutationKey: ['post-project'],
        mutationFn: (payload) => PostProjectApi(payload),
        onSuccess: () => {
            setSuccessMessage('Project uploaded successfully.')
            setProjectForm({ title: '', description: '', image: [] })
        },
        onError: () => {
            setSuccessMessage('')
        }
    }) 

    const handleSubmit = (e) => {
        e.preventDefault()
        postMutation.mutate(projectForm)
    }

  return (
    <main className='min-h-screen px-6 py-10 text-white'>
        <div className='mx-auto w-full max-w-3xl'>
            <div className='mb-6 flex items-center justify-between gap-4'>
                <div>
                    <h1 className='text-2xl font-[600] tracking-tight'>Post project</h1>
                    <p className='mt-1 text-sm text-white/70'>Add a new project to your portfolio.</p>
                </div>
            </div>

            <section className='rounded-2xl border border-white/10 bg-white/5 backdrop-blur'>
                <div className='border-b border-white/10 px-5 py-4'>
                    <h2 className='text-sm font-[600] text-white/90'>Project details</h2>
                </div>

                {successMessage ? (
                    <div className='border-b border-white/10 px-5 py-3 text-sm text-white/80'>
                        {successMessage}
                    </div>
                ) : null}

                {postMutation.isError ? (
                    <div className='border-b border-white/10 px-5 py-3 text-sm text-white/80'>
                        Failed to post project. Please try again.
                    </div>
                ) : null}

                <form onSubmit={handleSubmit} className='p-5'>
                    <div className='grid gap-5'>
                        <div className='grid gap-2'>
                            <label className='text-sm font-[500] text-white/80'>Title</label>
                            <input
                                name='title'
                                type='text'
                                onChange={handleChange}
                                placeholder='Enter title'
                                value={projectForm.title}
                                className='w-full rounded-xl bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20'
                            />
                        </div>

                        <div className='grid gap-2'>
                            <label className='text-sm font-[500] text-white/80'>Description</label>
                            <textarea
                                name='description'
                                value={projectForm.description}
                                onChange={handleChange}
                                placeholder='Enter description'
                                rows={6}
                                className='w-full resize-y rounded-xl bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20'
                            />
                        </div>

                        <div className='grid gap-2'>
                            <label className='text-sm font-[500] text-white/80'>Images</label>
                            <input
                                type='file'
                                name='image'
                                accept='image/*'
                                multiple
                                onChange={handleFileChange}
                                className='w-full cursor-pointer rounded-xl border border-white/15 bg-transparent px-4 py-3 text-sm text-white/80 file:mr-3 file:rounded-lg file:border file:border-white/10 file:bg-white/10 file:px-3 file:py-2 file:text-sm file:font-[500] file:text-white/90 hover:file:bg-white/15'
                            />
                            <p className='text-xs text-white/60'>Choose one or more images to display for this project.</p>
                        </div>

                        <div className='flex items-center justify-end gap-3'>
                            <button
                                type='submit'
                                disabled={postMutation.isPending}
                                className='cursor-pointer rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-[600] text-white/90 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60'
                            >
                                {postMutation.isPending ? 'Posting…' : 'Post project'}
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    </main>
  )
}

export default PostProject