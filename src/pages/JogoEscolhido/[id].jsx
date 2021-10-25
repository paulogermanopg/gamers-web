import React, { Component } from 'react'
import Layout from '../../components/common/Layout'
import data from '../products.json'
import BlocoJogo from '../../components/produtos/BlocoJogo'
import BlocoCompra from '../../components/produtos/BlocoCompra'
import styles from '../../styles/JogoEscolhido.module.css'

let jogos = data

import { useRouter } from 'next/router'


function JogoEscolhido() {

    const { query } = useRouter()

    const filtro = jogos.filter(obj => obj.id == query.id)
    const jogoEscolhido = filtro[0] || {}

    return (
      <Layout>
        <span className={styles.container}>
          <BlocoJogo 
            name={jogoEscolhido.name} descricao={jogoEscolhido.descricao}
              image={jogoEscolhido.image} score={jogoEscolhido.score}/>

          <BlocoCompra jogo={jogoEscolhido}/>
        </span>
        

      </Layout>
    )
}


export default JogoEscolhido