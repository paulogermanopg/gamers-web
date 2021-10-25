import React, { Component } from 'react'
import styles from '../../styles/ProdutosContent.module.css'
import Link from 'next/link'

class ProdutoContent extends Component {

  render() {
    return (
      <div className={styles.container}>

        <Link href={`/JogoEscolhido/${this.props.id}`}>
          <button className={styles.button}>

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

          </button>
          
        </Link>
      </div>
    )
  }
}

export default ProdutoContent