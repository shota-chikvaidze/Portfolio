import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { PostProject as PostProjectApi } from '../../api/endpoints/Project'
import toast from 'react-hot-toast'

const PostProject = () => {

    const [projectForm, setProjectForm] = useState({
        title: '',
        description: '',
        image: [],
        gitLink: ''
    })


    const handleChange = (e) => {
        setProjectForm({...projectForm, [e.target.name]: e.target.value})
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files || [])
        setProjectForm((prev) => ({ ...prev, image: files }))
    }


    const postMutation = useMutation({
        mutationKey: ['post-project'],
        mutationFn: (payload) => PostProjectApi(payload),
        onSuccess: (data) => {
            toast.success(data.message || 'Project created successfully!')
            setProjectForm({ title: '', description: '', image: [], gitLink: '' })
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

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', projectForm.title)
        formData.append('description', projectForm.description)
        formData.append('gitLink', projectForm.gitLink)
        
        projectForm.image.forEach((file, index) => {
            formData.append('images', file)
        })

        postMutation.mutate(formData)
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
                            <label className='text-sm font-[500] text-white/80'>Github link</label>
                            <input
                                name='gitLink'
                                type='text'
                                onChange={handleChange}
                                placeholder='Enter Github Link'
                                value={projectForm.gitLink}
                                className='w-full rounded-xl bg-transparent border border-white/15 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-white/30 focus-visible:ring-2 focus-visible:ring-white/20'
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