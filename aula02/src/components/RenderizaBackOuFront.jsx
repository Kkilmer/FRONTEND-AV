import React from 'react'

const RenderizaBackOuFront = () => {// corrigir em casa

    function tecnologiaEscolhar(oQueEscolher){
        if(oQueEscolher === "java"){
            return <h1>backend</h1>
        }if (oQueEscolher === "React"){
            return <b>frontend</b>
        }if (oQueEscolher === "aws"){
            return <i>cloud</i>
        }
    }

  return (
    <div>
        {tecnologiaEscolhar("java")}
        {tecnologiaEscolhar("React")}
        <br></br>
        {tecnologiaEscolhar("aws")}
    </div>
  )
}

export default RenderizaBackOuFront