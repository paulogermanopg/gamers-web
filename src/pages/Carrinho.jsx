import React, { Component } from 'react'
import Layout from '../components/common/Layout'
import Jogos from '../components/carrinho/jogos'
import Resumo from  '../components/carrinho/Resumo'
import styles from '../styles//carrinho/Carrinho.module.css'

class Carrinho extends Component {
  render() {
    return (
      <Layout>

        <div className={styles.container}>
          <Jogos />
          <Resumo />
        </div>

      </Layout>
    )
  }
}

export default Carrinho
