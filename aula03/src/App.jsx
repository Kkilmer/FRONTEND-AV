import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      {
        [ {nome: "João", email: "joao@gmail.com", curso: "Sistemas Para Internet"},
          {nome: "Maria", email: "maria@gmail.com", curso: "Sistemas Para Internet"},
          {nome: "Kevin", email: "kevin@gmail.com", curso: "Sistemas De Informação"}
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} />
        )
      }
    </div>
  )
}

export default App