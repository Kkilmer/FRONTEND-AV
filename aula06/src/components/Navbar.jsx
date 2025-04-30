import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicial</Link>
      <Link to="/contato">Contato</Link>
      <Link to="/a-faculdade">A FAculdade</Link>
      <Link to="/dpolgpd">DpoLgpd</Link>
      <Link to="/noticia">Noticas</Link>
    </nav>
  )
}

export default Navbar