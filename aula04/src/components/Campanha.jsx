import React from 'react'
import styles from './Campanha.module.css'
const Campanha = (props) => {

    function definirMensagem(mes) {
        if (mes === "setembro") {
            return "Prevenção ao suicídio"
        } else if (mes === "outubro") {
            return "Conscientização sobre o câncer de mama"
        } else if (mes === "novembro") {
            return "Prevenção e combate ao câncer de próstata"
        }

    }

    function defineCor(mes) {
        if (mes === "setembro") {
            return styles.setembro
        } else if (mes === "outubro") {
            return styles.outubro
        } else if (mes === "novembro") {
            return styles.novembro
        }
    }

  return (
    <div className={defineCor(props.mes)}>
        {definirMensagem(props.mes)}
    </div>
  )
}

export default Campanha