import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incrementaContador() {
        setContador(contador+1)
    }

    function decrementarContador() {
        setContador(contador-1)
    }

  return (
    <div>
        <h1>Contador com useState</h1>
        <button onClick={incrementaContador}>Incrementar contador</button>
        <br></br><br></br>
        <button onClick={decrementarContador}>Decrementar contador</button>
        <h1>O contador está em: {contador}</h1>
    </div>
  )
}

export default HookContador


