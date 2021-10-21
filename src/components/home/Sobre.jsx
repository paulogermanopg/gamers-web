import React, { Component } from 'react'
import styles from '../../styles/Sobre.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar, faGamepad } from '@fortawesome/free-solid-svg-icons'

class Sobre extends Component {
  render() {
    return (
      <div className={styles.containerSobre}>

        <h2 className={styles.titulo}>Sobre a Gamer$</h2>

        <p className={styles.texto}>
            Gamer$ é uma loja virtual e fictícia feita para fictícios jogadores que pretedem encontrar jogos de alta qualidade, aptos para avançar de nível e imergir neste mundo Gamer!
        </p>

        <div className={styles.blocos}>

            <span className={styles.esquerda}>
                <FontAwesomeIcon icon={faSearchDollar} size='2x' color='#fff' />
            </span>

            <span className={styles.direita}> 
                <FontAwesomeIcon icon={faGamepad} size='2x' color='#fff' />
            </span>
            
        </div>

        <div className={styles.blocos}>

            <p className={styles.textoBloco}>
                Compras Rápidas<br/>
                Descontos<br/>
                Frete Grátis<br/>
                Novidades
            </p>

            <p className={styles.textoBloco}>
                Rápido Acesso<br/>
                Histórico<br/>
                Favoritos<br/>
                Seguro e prático
            </p>
            
        </div>

      </div>
    )
  }
}

export default Sobre