import React from 'react'

const RenderizandoComFuncoes = () => {

    function escolhaDeREnderizacao(oQueRenderizar){
        if(oQueRenderizar === "h1"){
            return <h1>Texto em h1</h1>
        }else{
            return <h2>Texto em h2</h2>
        }
    }

  return (
    <div>
        {escolhaDeREnderizacao("h2")}
        {escolhaDeREnderizacao("h1")}
    </div>
  )
}

export default RenderizandoComFuncoes