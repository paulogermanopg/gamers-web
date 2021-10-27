import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCarrinho } from '../../store/actions/produtos'
import styles from '../../styles/produtos/BlocoCompra.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class BlocoCompra extends Component {
    state = {
        carrinho: this.props.carrinho,
    }

    //Varifica toda vez que houver atualização no estado da aplicação
    componentDidUpdate = prevProps => {
        if (prevProps != this.props) {
            this.setState({ 
                carrinho: this.props.carrinho,
             })
        }
    }

    //acrescenta mais um jogo no array do carrinho e upa no redux
    carrinho = async() => {
        let arrayCarrinho = this.state.carrinho
        arrayCarrinho.push(this.props.jogo)
        await this.setState({ carrinho: arrayCarrinho })
        this.props.onAddCarrinho({ ...this.state  })
        this.props.onCarrinho && this.props.onCarrinho()
        
        if (this.props.onCancel){
            this.props.onCancel && this.props.onCancel()
        }
    }

    render(){
        return (
            <div className={styles.container}>
                <p className={styles.preco}>
                    R$ {this.props.jogo.price}
                </p>
                <p className={styles.dividido}>
                    Dividido em até 8x de R$ {parseFloat((this.props.jogo.price/8).toFixed(2))} no cartão de crédito.
                </p>
                <button className={styles.button}
                    onClick={this.carrinho}>
                    <p>
                        Comprar
                    </p>
                    <FontAwesomeIcon icon={faShoppingCart} size='lg' 
                        color='#fff'/>
                </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlocoCompra)
