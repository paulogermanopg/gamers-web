import React, { Component } from 'react'
import Layout from '../components/common/Layout'
import ProdutoContent from '../components/produtos/ProdutoContent'

class Produtos extends Component {
  render() {
    return (
      <Layout>
        <ProdutoContent />
      </Layout>
    )
  }
}

export default Produtos