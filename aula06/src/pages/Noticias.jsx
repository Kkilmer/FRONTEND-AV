import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Noticias = () => {

  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/noticias")//request
    .then(response => setNoticias(response.data))//response | "then= então"
    .catch(error => console.error("Erro ao carregar a lista de notícias", error))
  }, [])

  return (
    <div>
      <h1>Notícias</h1>
      <ul>
        {//cada lista mapeada 
          noticias.map((notica) => (
            <li key={notica.id}>
              <h2>{notica.titulo}</h2>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Noticias