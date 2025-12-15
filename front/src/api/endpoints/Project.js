import axios from '../axios'

export const PostProject = async (payload) => {

    const res = await axios.post('/project/post-project', payload)
    return res.data.createProject
    
}

export const GetProjects = async () => {
    
    const res = await axios.get('/project/get-projects')
    return res.data.project
    
}

export const DeleteProject = async (id) => {
    
    const res = await axios.delete(`/project/delete-project/${id}`)
    return res.data.delProject
    
}