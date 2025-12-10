import axios from '../axios'

export const User = async () => {

    const res = await axios.get('/user/get-user')
    return res.data.admin

}

export const Login = async (loginForm) => {
    
    const res = await axios.post('/user/login', loginForm)
    if(res.data.token) {
        localStorage.setItem('admin_token', res.data.token);
    }

    return res.data;

}