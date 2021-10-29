import React, { Component } from 'react'
import styles from '../../styles/produtos/Categorias.module.css'

class Categoria extends Component {

  ordenar = tipo => {

    switch (tipo){
        case 'Alfabeto':
            function alfabetica(a,b) {
                if (a.name < b.name)
                   return -1;
                if (a.name > b.name)
                  return 1;
                return 0;
              }
            this.props.onOrdenar && this.props.onOrdenar(this.props.produtos.sort(alfabetica))
            break
        case 'Maior':
            function maiorValor(a,b) {
                if (a.price > b.price)
                   return -1;
                if (a.price < b.price)
                  return 1;
                return 0;
              }
            this.props.onOrdenar && this.props.onOrdenar(this.props.produtos.sort(maiorValor))
            break
        case 'Menor':
            function menorValor(a,b) {
                if (a.price < b.price)
                   return -1;
                if (a.price > b.price)
                  return 1;
                return 0;
              }
            this.props.onOrdenar && this.props.onOrdenar(this.props.produtos.sort(menorValor))
            break
        case 'Popular':
            function popular(a,b) {
                if (a.score > b.score)
                   return -1;
                if (a.score < b.score)
                  return 1;
                return 0;
              }
            this.props.onOrdenar && this.props.onOrdenar(this.props.produtos.sort(popular))
            break
      }
  }

  render() {
    return (
      <div className={styles.container}>

        <p className={styles.titulo}>Categorias</p>

        <hr className={styles.linhaFina} />

        <button className={styles.button}
          onClick={() => this.ordenar('Alfabeto')}>
          <p className={styles.escolhas}>Ordem Alfabética</p>
        </button>

        <button className={styles.button}
          onClick={() => this.ordenar('Maior')}>
          <p className={styles.escolhas}>Maior Preço</p>
        </button>

        <button className={styles.button}
          onClick={() => this.ordenar('Menor')}>
          <p className={styles.escolhas}>Menor Preço</p>
        </button>

        <button className={styles.button}
          onClick={() => this.ordenar('Popular')}>
          <p className={styles.escolhas}>Populares</p>
        </button>
      
      </div>
    )
  }
}

export default Categoria