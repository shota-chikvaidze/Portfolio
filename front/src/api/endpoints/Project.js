import axios from '../axios'

export const PostProject = async (payload) => {

    const res = await axios.post('/project/post-project', payload)
    return res.data.createProject
    
}

export const GetProjectsId = async (id) => {

    const res = await axios.post(`/project/post-project/${id}`, id)
    return res.data.project
    
}

export const GetProjects = async () => {
    
    const res = await axios.get('/project/get-projects')
    return res.data.project
    
}

export const DeleteProject = async (id) => {
    
    const res = await axios.delete(`/project/delete-project/${id}`)
    return res.data.delProject
    
}

export const UpdateProject = async ({ id, payload }) => {
    
    const res = await axios.patch(`/project/update-project/${id}`, payload)
    return res.data.project
    
}