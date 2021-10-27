import React, { Component } from 'react'
import Layout from '../components/common/Layout'
import Carousel from '../components/home/Carousel'
import Sobre from '../components/home/Sobre'
import styles from '../styles/home/Home.module.css'

class Home extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.container}>
          <Carousel />
          <Sobre />
        </div>
        
      </Layout>
    )
  }
}

export default Home