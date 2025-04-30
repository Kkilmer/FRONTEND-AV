import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Contato from './pages/Contato'
import Noticia from './pages/Noticia'
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
        <Route path='/noticia' element={<Noticia />}/>
        <Route path='/a-faculdade' element={<Faculdade />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App