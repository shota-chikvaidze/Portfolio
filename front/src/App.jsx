import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import Layout from './layout/Layout'

function App() {

  return (
    <>

      <Layout />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>

    </>
  )
}

export default App
