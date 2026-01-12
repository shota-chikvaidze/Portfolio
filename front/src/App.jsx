import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Contact } from './pages/contact/Contact'
import { AdminLogin } from './pages/adminLogin/AdminLogin'
import { Projects } from './pages/projects/Projects'
import Layout from './layout/Layout'
import Footer from './layout/Footer'

import { userAuth } from './store/UserAuth'
import { useThemeStore } from './store/ThemeStore'
import { useCurrentUser } from './hooks/UseCurrentUser'
import { Dashboard } from './components/dashboard/Dashboard'
import { AdminContact } from './components/adminContact/AdminContact'
import { AdminProject } from './components/adminProject/AdminProject'
import PostProject from './components/postProject/PostProject'
import SidebarWrapper from './components/sidebarWrapper/SidebarWrapper'

import { useEffect } from 'react'

function App() {
  const location = useLocation()
  const user = userAuth(s => s.user)
  const initTheme = useThemeStore(s => s.initTheme)
  const hasCheckedAuth = userAuth(s => s.hasCheckedAuth)


  useEffect(() => {
    initTheme()
  }, [initTheme])


  const publicRoutes = ['/admin-login', '/login', '/', '', '/contact', '/projects']
  const isPublicRoute = publicRoutes.includes(location.pathname)

  const shouldSkipCheck = location.pathname === '/admin-login' || (isPublicRoute && hasCheckedAuth)



  return (
    <>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      {!user && (
        <>
          <Layout />

          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/admin-login' element={ <AdminLogin /> } />
            <Route path='/projects' element={ <Projects /> } />
            <Route path='*' element={ <Navigate to={'/'} /> } />
          </Routes>

          <Footer />
        </>
      )}

      {user && (
        <Routes>
          <Route path='/' element={ <SidebarWrapper /> }>

            <Route index element={ <Dashboard /> } />
            <Route path='contacts' element={ <AdminContact /> } />
            <Route path='projects' element={ <AdminProject /> } />
            <Route path='add-project' element={ <PostProject /> } />

          </Route>

          <Route path='*' element={ <Navigate to={'/'} /> } />
        </Routes>
      )}

    </>
  )
}

export default App
