import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCarrinho } from '../../store/actions/produtos'
import JogoContentCarrinho from './JogoContentCarrinho'
import styles from '../../styles/carrinho/Jogos.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost} from '@fortawesome/free-solid-svg-icons'

class Jogos extends Component {
  state = {
    carrinho: this.props.carrinho,
    subTotal: this.props.subTotal,
    frete: this.props.frete,
    total: this.props.total,
    formaDePagamento: this.props.formaDePagamento,
  }

  //Varifica toda vez que houver atualização no estado da aplicação
  componentDidUpdate = prevProps => {
    if (prevProps != this.props) {
   
      this.setState({ 
        carrinho: this.props.carrinho,
        subTotal: this.props.subTotal,
        frete: this.props.frete,
        total: this.props.total,
        formaDePagamento: this.props.formaDePagamento,
        })

    }
  }

  // Adiciona mais um produto semelhante ao subTotal
  adicionarProduto = async(id,indicador) => {
    let produtoAdicionado = this.state.carrinho.filter(obj => obj.id == id)
    let subTotal = this.state.subTotal
    let frete = this.state.frete

    if (indicador == '-'){
      
      await this.setState({ 
        subTotal: subTotal - parseFloat((produtoAdicionado[0].price).toFixed(2)),
        frete: frete - 10,
        total: (subTotal - parseFloat((produtoAdicionado[0].price).toFixed(2))) + (frete - 10),
      })

    } else {

      await this.setState({ 
        subTotal: subTotal + parseFloat((produtoAdicionado[0].price).toFixed(2)),
        frete: frete + 10,
        total: (subTotal + parseFloat((produtoAdicionado[0].price).toFixed(2))) + (frete + 10),
      })

    }
    
    this.props.onAddCarrinho({ ...this.state  })
  }
  
  render() {
    return (
      <div className={styles.container}>

        <p className={styles.titulo}>Suas compras</p>

        {this.props.carrinho.length > 0 ?

        <div className={styles.bloco}>

          {this.state.carrinho.map((jogo) => (
         
            <JogoContentCarrinho id={jogo.id} jogo={jogo} 
              onAdicionar={this.adicionarProduto}/>
         
          ))}
          
        </div> 

        :

        <div className={styles.blocoVazio}>

          <span className={styles.ghost}>
            <FontAwesomeIcon icon={faGhost} size='10x' color='#fff' />
          </span>

        </div>
      
        
        }
        
      </div>
    )
  }
}

const mapStateToProps = ({ produtos }) => {
  return {
      carrinho: produtos.carrinho,
      subTotal: produtos.subTotal,
      frete: produtos.frete,
      total: produtos.total,
      formaDePagamento: produtos.formaDePagamento,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAddCarrinho: produtos => dispatch(addCarrinho(produtos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jogos)
