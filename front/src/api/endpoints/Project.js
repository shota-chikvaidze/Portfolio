import axios from '../axios'

export const PostProject = async (formData) => {
    const res = await axios.post('/project/post-project', formData, {
        headers: { 
            'Content-Type': 'multipart/form-data' 
        }
    })
    return res.data
}

export const UpdateProject = async ({ id, payload }) => {
    const res = await axios.patch(`/project/update-project/${id}`, payload, {
        headers: { 
            'Content-Type': 'multipart/form-data' 
        }
    })
    return res.data
}

export const GetProjectsId = async (id) => {

    const res = await axios.get(`/project/post-project/${id}`, id)
    return res.data.project
    
}

export const GetProjects = async () => {
    
    const res = await axios.get(`/project/get-projects`)
    return res.data
    
}

export const DeleteProject = async (id) => {
    
    const res = await axios.delete(`/project/delete-project/${id}`)
    return res.data
    
}

