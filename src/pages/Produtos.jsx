import React, { Component } from 'react'
import Layout from '../components/common/Layout'
import ProdutosRender from '../components/produtos/ProdutosRender'
import Categorias from '../components/produtos/Categorias'
import styles from '../styles/produtos/Produtos.module.css'
import data from './products.json'

let jogos = data

class Produtos extends Component {
  state = {
    produtos: jogos,
  }

  orderna = organizado => {
    this.setState({ produtos: organizado })
  }

  render() {
    return (
      <Layout>
        <span className={styles.container}>
          <Categorias produtos={this.state.produtos} onOrdenar={this.orderna}/>
          <ProdutosRender produtos={this.state.produtos} />
        </span>
      </Layout>
    )
  }
}

export default Produtos