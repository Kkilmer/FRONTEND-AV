import React from 'react'
import { useState } from 'react'

const HookQuina = () => {

    const [sorteado, setSorteado] = useState()
    const [listaDeSorteados, setListaDeSorteados] = useState([])
    
    function sortearNumero() {
        if (listaDeSorteados.length < 5){
            let numeroSorteado = Math.floor(Math.random() * 80) + 1
            setSorteado(numeroSorteado)
            setListaDeSorteados([...listaDeSorteados, numeroSorteado])
        }else{
            alert("Já temos 5 números sorteados")
        }
    }    

  return (
    <div>
        <h1>Sorteador da Quina em React</h1>
        <button onClick={sortearNumero}>Sortear Número</button>
        <h1>Último número sorteado: {sorteado}</h1>
        <h1>Sorteados: {listaDeSorteados.join(" - ")}</h1>
    </div>
  )
}

export default HookQuina