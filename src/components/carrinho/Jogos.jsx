import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCarrinho } from '../../store/actions/produtos'
import JogoContentCarrinho from './JogoContentCarrinho'
import styles from '../../styles/carrinho/Jogos.module.css'


class Jogos extends Component {
  state = {
    carrinho: this.props.carrinho,
    subTotal: this.props.subTotal,
  }

  //Varifica toda vez que houver atualização no estado da aplicação
  componentDidUpdate = prevProps => {
    if (prevProps != this.props) {
   
        if(this.props.carrinho.length == 0){
        this.setState({ 
            carrinho: this.props.carrinho,
            subTotal: this.props.subTotal,
            })
        } else {
        this.setState({ 
            carrinho: this.props.carrinho,
            subTotal: this.props.subTotal,
            })
        }
    }
  }

  // Exclui do carrinho quando preciona o botão menos e o valor é menor que 1
  excluirDoCarrinho = async(id) => {
    let array = []
    array = this.state.carrinho.filter(obj => obj.id != id)
    let produtoRetirado = this.state.carrinho.filter(obj => obj.id == id)
    await this.setState({ 
      carrinho: array,
      subTotal: this.state.subTotal - produtoRetirado[0].price
    })
    this.props.onAddCarrinho({ ...this.state  })
  }

  // Adiciona mais um produto semelhante ao subTotal
  adicionarProduto = async(id,indicador) => {
    let array = this.state.carrinho.filter(obj => obj.id != id)
    let produtoAdicionado = this.state.carrinho.filter(obj => obj.id == id)

    if (indicador == '-'){

      await this.setState({ 
        subTotal: this.state.subTotal - parseFloat((produtoAdicionado[0].price).toFixed(2))
      })
    } else {

      await this.setState({ 
        subTotal: this.state.subTotal + parseFloat((produtoAdicionado[0].price).toFixed(2))
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
              onExcluir={this.excluirDoCarrinho} onAdicionar={this.adicionarProduto}/>
         
          ))}
          
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
      subTotal: produtos.subTotal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onAddCarrinho: produtos => dispatch(addCarrinho(produtos))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jogos)
