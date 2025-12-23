import axios from '../axios'

export const User = async () => {
    const res = await axios.get('/user/me')
    return res.data.admin
}

export const Login = async (loginForm) => {
    const res = await axios.post('/user/login', loginForm)
    return res.data
}


export const Logout = async () => {
    const res = await axios.post('/user/logout')
    return res.data
}