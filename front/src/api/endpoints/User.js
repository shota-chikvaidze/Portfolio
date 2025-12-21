import axios from '../axios'
import { userAuth } from '../../store/UserAuth'

export const User = async () => {

    const res = await axios.get('/user/me')
    return res.data.admin

}

export const Login = async (loginForm) => {
    
    const res = await axios.post('/user/login', loginForm)
    return res.data

}