import React, { Component } from 'react'
import ProdutoContent from './ProdutoContent'
import styles from '../../styles/produtos/ProdutosRender.module.css'
import Grid from '@material-ui/core/Grid'

class ProdutosRender extends Component {
  state = {
    produtos: this.props.produtos,
  }

  render() {
    return (
      <div className={styles.container}>

        <Grid container justify="center" spacing={1}>

            {this.state.produtos.map((jogo) => (
                <Grid key={jogo.id} item xs={12} sm={6} md={4} lg={3}>
                    <ProdutoContent id={jogo.id} name={jogo.name} price={jogo.price} image={jogo.image} />
                </Grid>
            ))}

        </Grid>

      </div>
    )
  }
}

export default ProdutosRender