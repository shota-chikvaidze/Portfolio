import axios from 'axios'
import { userAuth } from '../store/UserAuth'

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`
})

instance.interceptors.request.use((config) => {
    const token = userAuth.getState().accessToken
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default instance