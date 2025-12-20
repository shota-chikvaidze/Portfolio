import axios from 'axios'
import { userAuth } from '../store/UserAuth'
import toast from 'react-hot-toast'

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`
})

// REQUEST INTERCEPTOR: Runs BEFORE every request is sent
instance.interceptors.request.use((config) => {
    const token = userAuth.getState().accessToken
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})


instance.interceptors.response.use(
    (response) => response,
    
    (error) => {
        if (!error.response) {
            toast.error('Network error. Check your connection.')
            return Promise.reject(error)
        }

        if (error.response.status === 401) {
            const logout = userAuth.getState().logout
            logout()
            
            window.location.href = '/admin-login'
            
            toast.error('Session expired. Please login again.')
            return Promise.reject(error)
        }

        if (error.response.status === 403) {
            toast.error('You do not have permission to perform this action.')
            return Promise.reject(error)
        }

        if (error.response.status === 500) {
            toast.error('Server error. Please try again later.')
            return Promise.reject(error)
        }

        return Promise.reject(error)
    }
)

export default instance