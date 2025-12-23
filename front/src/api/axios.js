import axios from 'axios'
import { userAuth } from '../store/UserAuth'
import toast from 'react-hot-toast'

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    withCredentials: true
})


instance.interceptors.response.use(
    (response) => response,
    
    (error) => {
        if (!error.response) {
            toast.error('Network error. Check your connection.')
            return Promise.reject(error)
        }

        const { status } = error.response
        const url = error.config?.url || ''

        if (status === 401 && !url.includes('/login')) {
            const clearAuth = userAuth.getState().clearAuth
            clearAuth()
            window.location.href = '/admin-login'
            toast.error('Session expired. Please login again.')
            return Promise.reject(error)
        }

        if (status === 403) {
            toast.error('You do not have permission to perform this action.')
            return Promise.reject(error)
        }

        if (status === 500) {
            toast.error('Server error. Please try again later.')
            return Promise.reject(error)
        }

        return Promise.reject(error)
    }
)

export default instance