import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { AdminLogin } from './pages/adminLogin/AdminLogin'
import Layout from './layout/Layout'

import { UseCurrentUser } from './hooks/UseCurrentUser'
import { AdminContact } from './pages/adminContact/AdminContact'

function App() {

  const { data: user, isLoading } = UseCurrentUser()

  if(isLoading){
    return <p> Loading... </p>
  }

  return (
    <>

      {!user && (
<>
        <Layout />

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/admin-login' element={ <AdminLogin /> } />
        </Routes>
        </>
      )}

      {user && (
        <Routes>
          <Route path='/contact' element={ <AdminContact /> } />
        </Routes>
      )}

    </>
  )
}

export default App
