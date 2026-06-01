import { Routes, Route, Navigate } from 'react-router-dom'


import { Home } from './pages/home/Home'
import Layout from './layout/Layout'
import Footer from './layout/Footer'

import Cursor from './components/cursor/Cursor'

function App() {

  return (
    <>
      <Cursor />

      <Layout />
      
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='*' element={ <Navigate to={'/'} /> } />
      </Routes>

      <Footer />

    </>
  )
}

export default App
