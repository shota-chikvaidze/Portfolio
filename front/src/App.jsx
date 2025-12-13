import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { AdminLogin } from './pages/adminLogin/AdminLogin'
import Layout from './layout/Layout'

import { userAuth } from './store/UserAuth'
import { useCurrentUser } from './hooks/UseCurrentUser'
import { AdminContact } from './pages/adminContact/AdminContact'

import Loading from './components/loading/Loading'

function App() {

  const isAuthenticated = userAuth(s => s.isAuthenticated)

  const { isLoading } = useCurrentUser()

  if(isLoading){
    return <Loading />
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
            <Route path='*' element={ <Navigate to={'/'} /> } />
          </Routes>
        </>
      )}

      {isAuthenticated && (
        <Routes>
          <Route path='/contact' element={ <AdminContact /> } />
          <Route path='*' element={ <Navigate to={'/contact'} /> } />
        </Routes>
      )}

    </>
  )
}

export default App
