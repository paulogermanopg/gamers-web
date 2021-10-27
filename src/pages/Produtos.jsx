import React, { Component } from 'react'
import Layout from '../components/common/Layout'
import ProdutosRender from '../components/produtos/ProdutosRender'
import Categorias from '../components/produtos/Categorias'
import styles from '../styles/produtos/Produtos.module.css'

class Produtos extends Component {

  render() {
    return (
      <Layout>
        <span className={styles.container}>
          <Categorias />
          <ProdutosRender />
        </span>
      </Layout>
    )
  }
}

export default Produtos