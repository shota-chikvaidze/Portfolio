import React, { useState, useEffect } from 'react'
import axios from '../../api/axios'

export const AdminLogin = () => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const [success, setSuccess] = useState('')

    const handleChange = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{

            const res = await axios.post('/user/', loginForm)
            if(res.status === 200 && res.data.token){
                localStorage.setItem('admin_token', res.data.token)
            }
            setSuccess('yo ')

        }catch(err){
            console.error(err)
        }

    }

  return (
    <section>

        <form onSubmit={handleSubmit}>

            <input type='email' placeholder='Enter email' onChange={handleChange} value={loginForm.email} name='email' />
            <input type='password' placeholder='Enter password' onChange={handleChange} value={loginForm.password} name='password' />

            <button type='submit'> Login </button>

            {success}

        </form>

    </section>
  )
}
