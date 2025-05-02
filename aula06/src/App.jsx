import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Contato from './pages/Contato'
import Noticias from './pages/Noticias'
import Dpolgpd from './pages/DpoLgpd'
import Faculdade from './pages/Faculdade'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicial />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/dpolgpd' element={<Dpolgpd />}/>
        <Route path='/noticias' element={<Noticias />}/>
        <Route path='/a-faculdade' element={<Faculdade />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App