import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Navigate } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { AdminLogin } from './pages/adminLogin/AdminLogin'
import { Projects } from './pages/projects/Projects'
import Layout from './layout/Layout'

import { userAuth } from './store/UserAuth'
import { useCurrentUser } from './hooks/UseCurrentUser'
import { Dashboard } from './components/dashboard/Dashboard'
import { AdminContact } from './components/adminContact/AdminContact'
import { AdminProject } from './components/adminProject/AdminProject'
import PostProject from './components/postProject/PostProject'
import SidebarWrapper from './components/sidebarWrapper/SidebarWrapper'

import { MainLoading } from './components/loading/Loading'

function App() {

  const isAuthenticated = userAuth(s => s.isAuthenticated)

  const { isLoading } = useCurrentUser()

  if(isLoading){
    return <MainLoading />
  }

  return (
    <>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1c112d',
            color: '#fff',
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

      {!isAuthenticated && (
        <>
          <Layout />

          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/admin-login' element={ <AdminLogin /> } />
            <Route path='/projects' element={ <Projects /> } />
            <Route path='*' element={ <Navigate to={'/'} /> } />
          </Routes>
        </>
      )}

      {isAuthenticated && (
        <Routes>
          <Route path='/' element={ <SidebarWrapper /> }>

            <Route index element={ <Dashboard /> } />
            <Route path='dashboard' element={ <Dashboard /> } />
            <Route path='contacts' element={ <AdminContact /> } />
            <Route path='projects' element={ <AdminProject /> } />
            <Route path='add-project' element={ <PostProject /> } />

          </Route>

          <Route path='*' element={ <Navigate to={'/dashboard'} /> } />
        </Routes>
      )}

    </>
  )
}

export default App
