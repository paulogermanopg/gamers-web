import React, { Component } from 'react'
import Header from '../components/common/Header'
import Link from 'next/link'
import Footer from '../components/common/Footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Olá</h3>
        <Link href='/Produtos'>
          Produtos
        </Link>
        <Footer />
      </div>
      
    )
  }
}

export default Home