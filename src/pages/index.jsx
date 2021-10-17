import React, { Component } from 'react'
import Header from '../components/common/Header'
import Link from 'next/link'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Olá</h3>
        <Link href='/Produtos'>
          Produtos
        </Link>
      </div>
      
    )
  }
}

export default Home