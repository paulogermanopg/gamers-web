import React, { Component } from 'react'
import { connect } from 'react-redux'
import JogoContentCarrinho from './JogoContentCarrinho'
import styles from '../../styles/carrinho/Jogos.module.css'


class Jogos extends Component {
  state = {
    carrinho: this.props.carrinho,
  }

  //Varifica toda vez que houver atualização no estado da aplicação
  componentDidUpdate = prevProps => {
    if (prevProps != this.props) {
   
        if(this.props.carrinho.length == 0){
        this.setState({ 
            carrinho: this.props.carrinho,
            })
        } else {
        this.setState({ 
            carrinho: this.props.carrinho,
            })
        }
    }
  }
  
  render() {
    return (
      <div className={styles.container}>

        <p className={styles.titulo}>Suas compras</p>

        {this.props.carrinho.length > 0 ? 
        <div className={styles.bloco}>
          <JogoContentCarrinho jogo={this.state.carrinho[0]}/>
        </div> 
        :
        <p>Carrinho vazio</p>
        }
        
      </div>
    )
  }
}

const mapStateToProps = ({ produtos }) => {
  return {
      carrinho: produtos.carrinho,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAddCarrinho: produtos => dispatch(addCarrinho(produtos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jogos)
