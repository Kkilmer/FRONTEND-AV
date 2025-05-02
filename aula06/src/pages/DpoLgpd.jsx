import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DpoLgpd = () => {

  const [dpoLgpds, setDpoLgpd] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/dpolgpd")//request
    .then(response => setDpoLgpd(response.data))//response | "then= então"
    .catch(error => console.error("Erro ao carregar a lista de dpoLgpd", error))
  }, [])

  return (

    <div>
      <h1>DpoLgpd</h1>
      <ul>
        {//cada lista mapeada 
          dpoLgpds.map((dpoLgpd) => (
            <li key={dpoLgpd.id}>
              <h2>{dpoLgpd.titulo}</h2>
              <p>{dpoLgpd.texto}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default DpoLgpd