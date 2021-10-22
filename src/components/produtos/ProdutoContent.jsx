import React, { Component } from 'react'
import styles from '../../styles/ProdutosContent.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchDollar, faGamepad } from '@fortawesome/free-solid-svg-icons'

class ProdutoContent extends Component {
  
  render() {
    return (
      <div className={styles.container}>

        <div>

          <span className={styles.spanImg}>
            <img src={'/static/images/jogos/horizon-zero-dawn.png'} alt="slide-img" className={styles.img}></img>
          </span>
          
          <p className={styles.nome}>
            Horizon Zero Dawn
          </p>

          <p className={styles.preco}>
            R$ 120,00
          </p>

          <p className={styles.dividido}>
            Dividido em até 8x de R$ 12,90 no cartão de crédito
          </p>

        </div>

      </div>
    )
  }
}

export default ProdutoContent