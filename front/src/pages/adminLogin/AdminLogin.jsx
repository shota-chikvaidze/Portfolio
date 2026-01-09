import React, { useState } from 'react'
import { Login } from '../../api/endpoints/User'
import { useMutation } from '@tanstack/react-query'
import { userAuth } from '../../store/UserAuth'
import toast from 'react-hot-toast'
import { Loading } from '../../components/loading/Loading'

export const AdminLogin = () => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const setAuth = userAuth((s) => s.setAuth)

    const handleChange = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }

    const loginMutation = useMutation({
        mutationKey: 'admin-login',
        mutationFn: () => Login(loginForm),

        onSuccess: (data) => {
            setAuth(data.user)
            toast.success(data.message)
        },
        onError: (error) => {
            
            const errorMessage = error?.response?.data?.message
            if(errorMessage){
                toast.error(errorMessage)
            }else{
                toast.error('Something went wrong. Please try again.')
            }

        }
    })

    const handleSubmit = async (e) => {
    
        e.preventDefault()
        loginMutation.mutate()
        
    }

  return (
        <section className='w-full flex justify-center px-4 py-14 min-h-[calc(100vh-70px)]'>
            <div className='w-full max-w-[440px]'>
                <div className='bg-[var(--bg-secondary)] backdrop-blur-md border border-white/10 rounded-2xl p-7 shadow-md'>
                    <div className='mb-7'>
                        <h2 className='text-[var(--text-white)] text-[1.8rem] font-[600] tracking-wide'>Admin Login</h2>
                        <p className='text-[var(--text-primary)]/70 mt-2 text-[0.95rem]'>Sign in to manage contact messages.</p>
                    </div>

                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[var(--text-primary)] text-[0.95rem]'>Email</label>
                            <input
                                type='email'
                                placeholder='Enter email'
                                onChange={handleChange}
                                value={loginForm.email}
                                name='email'
                                className='w-full rounded-xl bg-transparent border border-[var(--text-primary)]/15 px-4 py-3 text-[var(--text-white)] placeholder:text-[var(--text-primary)]/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-[var(--accent-purple)]/40'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-[var(--text-primary)] text-[0.95rem]'>Password</label>
                            <input
                                type='password'
                                placeholder='••••••••'
                                onChange={handleChange}
                                value={loginForm.password}
                                name='password'
                                className='w-full rounded-xl bg-transparent border border-[var(--text-primary)]/15 px-4 py-3 text-[var(--text-white)] placeholder:text-[var(--text-primary)]/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-[#8E6AFB]/40'
                            />
                        </div>

                        <button
                            type='submit'
                            className='cursor-pointer mt-2 w-full rounded-xl py-3 text-[var(--text-primary)] text-[1.05rem] font-[500] bg-[var(--bg-primary)] hover:opacity-90 transition-opacity disabled:opacity-60'
                        >
                            {loginMutation.isPending ? <Loading /> : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
  )
}
