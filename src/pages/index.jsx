import React, { Component } from 'react'
import Layout from '../components/common/Layout'
import Carousel from '../components/home/Carousel'

class Home extends Component {
  render() {
    return (
      <Layout>
        <Carousel />
      </Layout>
    )
  }
}

export default Home