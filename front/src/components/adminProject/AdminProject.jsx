import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { GetProjects, DeleteProject, GetProjectsId, UpdateProject, DeleteImageFromProject } from '../../api/endpoints/Project'
import { Loading } from '../../components/loading/Loading'
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const AdminProject = () => {

  const queryClient = useQueryClient()
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({
    title: '',
    description: '',
    image: '',
    gitLink: '',
  })
  const [confirmDialog, setConfirmDialog] = useState(false)
  const [projectToDelete, setProjectToDelete] = useState(null)
  const [projectPopup, setProjectPopup] = useState(false)
  
  const [selectedFiles, setSelectedFiles] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])

  const { data: projectData = [], isError: projectError, isLoading: projectLoading } = useQuery({
    queryKey: ['get-project'],
    queryFn: () => GetProjects()
  })

  const project = projectData.project || []


  const deleteProjMutation = useMutation({
    mutationKey: ['delete-project'],
    mutationFn: (id) => DeleteProject(id),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ['get-project'] })
      toast.success(data.message)
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

  const updateProjMutation = useMutation({
    mutationKey: ['update-project'],
    mutationFn: ({ id, payload }) => UpdateProject({ id, payload }),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ['get-project'] })
      setEditingId(null)
      setProjectPopup(false)
      setEditForm({ title: '', description: '', image: '', gitLink: '' })
      setSelectedFiles([])
      setImagePreviews([])
      toast.success(data.message)
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

  const deleteImageMutation = useMutation({
    mutationKey: ['delete-image'],
    mutationFn: ({ projectId, imageUrl }) => DeleteImageFromProject({ projectId, imageUrl }),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ['get-project'] })
      toast.success(data.message)
      
      setEditForm(prev => ({
        ...prev,
        image: data.project.image
      }))
      setImagePreviews(data.project.image)
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

  const handleProjDelete = (projectId) => {
    deleteProjMutation.mutate(projectId)
  }

  const handleEditClick = (pro) => {
    setEditingId(pro._id)
    setProjectPopup(true)
    setEditForm({
      title: pro.title,
      description: pro.description,
      image: pro.image || [], 
      gitLink: pro.gitLink || '',
    })

    setImagePreviews(pro.image || [])
    setSelectedFiles([]) 
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setProjectPopup(false)
    setEditForm({ title: '', description: '', image: '', gitLink: '' })
    setSelectedFiles([])
    setImagePreviews([])
  }

  const handleUpdateSubmit = (projectId) => {
    if (!editForm.title || !editForm.description) {
      toast.error('Title and description are required')
      return
    }

    const payload = new FormData()
    payload.append('title', editForm.title)
    payload.append('description', editForm.description)
    payload.append('gitLink', editForm.gitLink)
    
    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        payload.append('images', file)
      })
    }
  
    updateProjMutation.mutate({ id: projectId, payload })
  }


  const handleInputChange = (field, value) => {
    setEditForm(prev => ({ ...prev, [field]: value }))
  }


  const handleFileSelect = (e) => {
    const newFiles = Array.from(e.target.files)
    if (newFiles.length === 0) return
  
    setSelectedFiles(prev => [...prev, ...newFiles])
  
    const newPreviews = newFiles.map(file => URL.createObjectURL(file))
    setImagePreviews(prev => [...prev, ...newPreviews])
    
    e.target.value = ''
  }


  if (projectError) {
    return (
      <main className='min-h-screen px-6 py-10 text-[var(--text-primary)]'>
        <p className='text-[var(--text-secondary)]'>Error loading your projects.</p>
      </main>
    )
  }

  return (
    <main className='mt-[20px] relative '>

      <div className='mx-auto w-full max-w-6xl'>
        <div className='mb-6 flex items-center justify-between gap-4'>
          <div>
            <h1 className='text-2xl text-[var(--text-primary)] font-[600] tracking-tight'>Projects</h1>
            <p className='mt-1 text-sm text-[var(--text-secondary)]'>Projects currently listed on your portfolio.</p>
          </div>
        </div>

        <section className='rounded-2xl border border-[var(--border-color)] bg-[var(--glass-overlay)] backdrop-blur'>
          <div className='border-b border-[var(--border-color)] px-5 py-4'>
            <div className='flex items-center justify-between gap-3'>
              <h2 className='text-sm font-[600] text-[var(--text-primary)]'>Inbox</h2>
              <span className='text-xs text-[var(--text-muted)]'>{projectData.length} total</span>
            </div>
          </div>
          {projectLoading ? (
            <div className='px-5 py-10'>
              <Loading />
            </div>
          ) : projectData.length === 0 ? (
            <div className='px-5 py-10 text-center text-sm text-[var(--text-secondary)]'>No projects yet.</div>
          ) : (
            <div className='overflow-x-auto scrollbar-glass max-h-[630px] overflow-y-auto'>
              <table className='w-full min-w-[760px] table-auto borer-separate border-spacing-0 text-left text-sm'>
                <thead>
                  <tr className='text-xs uppercase tracking-wider text-[var(--text-muted)]'>
                    <th className='whitespace-nowrap px-5 py-4 font-[600]'>Image</th>
                    <th className='whitespace-nowrap px-5 py-4 font-[600]'>Name</th>
                    <th className='px-5 py-4 font-[600]'>Description</th>
                    <th className='whitespace-nowrap px-5 py-4 font-[600]'>Date</th>
                    <th className='whitespace-nowrap px-5 py-4 font-[600]'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {project.map((pro) => (
                    <tr
                      key={pro._id ?? `${pro.createdAt}`}
                      className='border-t border-[var(--border-color)] transition hover:bg-[var(--glass-overlay)]'
                    >
                      <td className='px-5 py-4 align-top font-[600] text-[var(--text-primary)]'> 
                        <div>
                          
                            {pro.image.length === 0 ? (
                              <div className='inline-flex h-[130px] w-[100px] items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--glass-overlay)] text-xs text-[var(--text-muted)]'>
                                No image
                              </div>
                            ) : (
                              <div className='flex max-w-[100px] gap-2 overflow-x-auto scrollbar-glass'>
                                {pro.image.map((img) => (
                                  <img
                                    key={img}
                                    src={img}
                                    alt='Project images'
                                    className='h-[130px] w-[100px] flex-none rounded-xl border border-[var(--border-color)] bg-[var(--glass-overlay)] object-cover'
                                    loading='lazy'
                                  />
                                ))}
                              </div>
                            )}
                              
                        </div>
                      </td>
                      <td className='px-5 py-4 align-top font-[600] text-[var(--text-primary)]'>
                        {pro.title}
                      </td>
                      <td className='px-5 py-4 align-top text-[var(--text-secondary)]'>
                        <div className='max-w-[560px] whitespace-pre-wrap break-words'>
                          {pro.description}
                        </div>
                      </td>
                      <td className='px-5 py-4 align-top text-[var(--text-secondary)]'>
                        {pro.createdAt ? new Date(pro.createdAt).toLocaleString() : '—'}
                      </td>
                      <td className='px-5 py-4 align-top text-[var(--text-secondary)]'>
                        <div className='flex gap-2'>
                          <button
                            type='button'
                            className='cursor-pointer rounded-md border border-[var(--border-color)] p-1 transition hover:bg-[var(--glass-overlay)] disabled:cursor-not-allowed disabled:opacity-50'
                            onClick={() => handleEditClick(pro)}
                            disabled={deleteProjMutation.isPending || updateProjMutation.isPending}
                            aria-label='Edit project'
                          >
                            <MdEdit className='h-[20px] w-[20px]' />
                          </button>
                          <button
                            type='button'
                            className='cursor-pointer rounded-md border border-[var(--border-color)] p-1 transition hover:bg-[var(--glass-overlay)] disabled:cursor-not-allowed disabled:opacity-50'
                            onClick={() => {
                              setProjectToDelete(pro)
                              setConfirmDialog(true)
                            }}
                            disabled={deleteProjMutation.isPending || updateProjMutation.isPending}
                            aria-label='Delete project'
                          >
                            <MdDeleteOutline className='h-[20px] w-[20px]' />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>

      {confirmDialog && projectToDelete && (
        <div 
          onClick={() => {
            setConfirmDialog(false)
            setProjectToDelete(null)
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
                  setProjectToDelete(null)
                }}
                className='cursor-pointer text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition p-1 rounded-lg hover:bg-[var(--glass-overlay)]'
                aria-label='Close dialog'
              >
                <RxCross2 className='w-5 h-5' />
              </button>
            </div>

            <div className='mb-6 p-4 rounded-xl bg-[var(--glass-overlay)] border border-[var(--border-color)]'>
              <p className='text-[var(--text-primary)] mb-2'>
                Are you sure you want to delete <span className='font-[600] bg-[var(--accent)]'>"{projectToDelete.title}"</span>?
              </p>
              <p className='text-[var(--text-secondary)] text-sm'>
                All project data including images will be permanently removed.
              </p>
            </div>

            <div className='flex gap-3 justify-end'>
              <button
                onClick={() => {
                  setConfirmDialog(false)
                  setProjectToDelete(null)
                }}
                className='px-4 py-2 rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] text-[var(--text-primary)] font-[500] transition hover:bg-[var(--glass-overlay)]/50'
                disabled={deleteProjMutation.isPending}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleProjDelete(projectToDelete._id)
                  setConfirmDialog(false)
                  setProjectToDelete(null)
                }}
                disabled={deleteProjMutation.isPending}
                className='px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 font-[500] transition hover:bg-red-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
              >
                <MdDeleteOutline className='w-5 h-5' />
                {deleteProjMutation.isPending ? 'Deleting...' : 'Delete Project'}
              </button>
            </div>
          </div>
        </div>
      )}


      {editingId !== null && projectPopup && (
        <div 
          onClick={() => setProjectPopup(false)}
          className='flex items-center justify-center fixed h-full w-full top-0 left-0 bg-[var(--modal-overlay)] z-50'
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className='bg-[var(--glass-overlay)] backdrop-blur border border-[var(--border-color)] rounded-xl p-6 w-[500px] max-h-[80vh] overflow-y-auto scrollbar-glass'
          >
            <h2 className='text-[var(--text-primary)] text-xl font-[600] mb-6'>Edit Project</h2>
            
            <div className='mb-4'>
              <label className='text-[var(--text-secondary)] text-sm mb-2 block'>Title</label>
              <input
                type='text'
                value={editForm.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className='w-full rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] px-3 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--border-color)] focus:outline-none'
                placeholder='Project title'
              />
            </div>

            <div className='mb-4'>
              <label className='text-[var(--text-secondary)] text-sm mb-2 block'>Description</label>
              <textarea
                value={editForm.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className='w-full rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] px-3 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--border-color)] focus:outline-none'
                placeholder='Project description'
                rows={5}
              />
            </div>

            <div className='mb-4'>
              <label className='text-[var(--text-secondary)] text-sm mb-2 block'>Project Images</label>
              
              <input
                type='file'
                accept='image/*'
                multiple
                onChange={handleFileSelect}
                className='w-full text-[var(--text-secondary)] text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[var(--glass-overlay)] file:text-[var(--text-primary)] file:cursor-pointer hover:file:bg-[var(--glass-overlay)]/50'
              />
              <p className='text-[var(--text-muted)] text-xs mt-1'>Select one or multiple images from your computer</p>
              
              {imagePreviews.length > 0 && (
                <div className='mt-3 flex flex-wrap gap-2'>
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className='relative group'>
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className='h-20 w-20 object-cover rounded-lg border border-[var(--border-color)]'
                      />
                      <button
                        type='button'
                        onClick={() => deleteImageMutation.mutate({ projectId: editingId, imageUrl: preview })}
                        disabled={deleteImageMutation.isPending}
                        className='cursor-pointer absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50'
                        aria-label='Remove image'
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className='mb-6'>
              <label className='text-[var(--text-secondary)] text-sm mb-2 block'>GitHub Link</label>
              <input
                type='text'
                value={editForm.gitLink}
                onChange={(e) => handleInputChange('gitLink', e.target.value)}
                className='w-full rounded-lg border border-[var(--border-color)] bg-[var(--glass-overlay)] px-3 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--border-color)] focus:outline-none'
                placeholder='Github link'
              />
            </div>

            <div className='flex gap-3'>
              <button 
                onClick={() => handleUpdateSubmit(editingId)}
                disabled={updateProjMutation.isPending}
                className='flex-1 bg-green-500/20 border border-green-500/50 text-green-300 px-4 py-2 rounded-lg font-[500] transition hover:bg-green-500/30 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {updateProjMutation.isPending ? 'Updating...' : 'Update Project'}
              </button>
              
              <button 
                onClick={handleCancelEdit}  
                className='bg-[var(--glass-overlay)] border border-[var(--border-color)] text-[var(--text-primary)] px-4 py-2 rounded-lg font-[500] transition hover:bg-[var(--glass-overlay)]/50'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}
