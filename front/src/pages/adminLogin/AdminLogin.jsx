import React, { useState } from 'react'
import axios from '../../api/axios'
import { Login } from '../../api/endpoints/User'

export const AdminLogin = () => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{

            const res = await Login(loginForm)
            window.location.href = ('/')

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

        </form>

    </section>
  )
}
