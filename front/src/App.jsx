import { Routes, Route } from 'react-router-dom'
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
            <Route path='project' element={ <PostProject /> } />

          </Route>

          <Route path='*' element={ <Navigate to={'/dashboard'} /> } />
        </Routes>
      )}

    </>
  )
}

export default App
