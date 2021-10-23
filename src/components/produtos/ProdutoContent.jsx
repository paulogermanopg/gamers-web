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
            <img src={`/static/images/jogos/${this.props.image}`} alt="slide-img" className={styles.img}></img>
          </span>
          
          <p className={styles.nome}>
            {this.props.name}
          </p>

          <p className={styles.preco}>
            R$ {this.props.price}
          </p>

          <p className={styles.dividido}>
            Dividido em até 8x de R$ {parseFloat((this.props.price/8).toFixed(2))} no cartão de crédito
          </p>

        </div>

      </div>
    )
  }
}

export default ProdutoContent