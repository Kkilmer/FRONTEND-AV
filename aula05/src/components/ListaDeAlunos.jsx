import React, { useEffect, useState } from 'react'

const ListaDeAlunos = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3000/alunos")
            const data = await response.json()
            setAlunos(data)
        }

        fetchData()
    }, [])

  return (
    <div>
        <table border='1px'>
            <thead>
                <th>Matricula:</th>
                <th>Nome:</th>
                <th>Email:</th>
            </thead>
            <tbody>
                {
                    alunos.map((aluno) => (
                    <tr key={aluno.id}>
                        <td>{aluno.id}</td>
                        <td>{aluno.nome}</td>
                        <td>{aluno.email}</td>

                    </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListaDeAlunos