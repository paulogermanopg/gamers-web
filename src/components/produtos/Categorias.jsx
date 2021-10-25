import React, { Component } from 'react'
import data from '../../pages/products.json'
import styles from '../../styles/Categorias.module.css'

let jogos = data

class Categoria extends Component {
  state = {
    produtos: jogos,
  }
  render() {
    return (
      <div className={styles.container}>

        <p className={styles.titulo}>Categorias</p>

        <hr className={styles.linhaFina} />

        <p className={styles.escolhas}>RPG</p>
        <p className={styles.escolhas}>Aventura</p>
        <p className={styles.escolhas}>FPS</p>
        <p className={styles.escolhas}>Esporte</p>

        <hr className={styles.linha} />

        <p className={styles.titulo}>Filtrar</p>

        <hr className={styles.linhaFina} />

        <p className={styles.escolhas}>Ordem Alfabética</p>
        <p className={styles.escolhas}>Maior Preço</p>
        <p className={styles.escolhas}>Menor Preço</p>
        <p className={styles.escolhas}>Populares</p>

      </div>
    )
  }
}

export default Categoria