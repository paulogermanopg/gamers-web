import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/carrinho/Resumo.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'


class Resumo extends Component {
  state = {
    carrinho: this.props.carrinho,
    numeroProdutos: 0,
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
  
  render() {
    return (
      <div className={styles.container}>

        <p className={styles.titulo}>Resumo</p>
        
        {/* onde mostrará o preço total e o frete */}
        <div className={styles.bloco}>

          <span className={styles.spanPreco}>
            <p className={styles.texto}>
              {this.state.carrinho.length} Produtos
            </p>

            <p className={styles.texto}>
              R$ {parseFloat((this.state.subTotal).toFixed(2))}
            </p>
          </span>

          <span className={styles.spanPreco}>
            <p className={styles.texto}>
              Frete
            </p>

            <p className={styles.texto}>
              R$ {this.state.frete}
            </p>
          </span>

          <hr className={styles.linha} />

          <span className={styles.spanPreco}>
            <p className={styles.total}>
              Total
            </p>

            <p className={styles.total}>
              R$ {parseFloat((this.state.total).toFixed(2))}
            </p>
          </span>

          <p className={styles.dividido}>
            Dividido em até 3x de R$ {parseFloat((this.props.total/3).toFixed(2))} no cartão de crédito
            {<br />}
            Ou em até 8x de R$ {parseFloat((this.props.total/8).toFixed(2))} no cartão de crédito
          </p>

          <hr className={styles.linha} />

          <span className={styles.spanPagamento}>

            <div>

              <p className={styles.pagamentoTitulo}>
                Forma de Pagamento
              </p>

              <button 
                className={
                  this.state.formaDePagamento == 'boleto' ? styles.pagamentoSelecionado : styles.pagamento 
                  }
                onClick={() => this.setState({ formaDePagamento: 'boleto' })}
              > 

                <FontAwesomeIcon icon={faMoneyBillWave} size='3x' color='#fff' />
                <p className={styles.texto}>Boleto</p>

              </button>

              <button 
                className={
                  this.state.formaDePagamento == 'cartao' ? styles.pagamentoSelecionado : styles.pagamento 
                  }
                onClick={() => this.setState({ formaDePagamento: 'cartao' })}
              >  

                <FontAwesomeIcon icon={faCreditCard} size='3x' color='#fff' />
                <p className={styles.texto}>Cartão</p>

              </button>
            </div>

          </span>

          <button className={styles.botao}>
            <p className={styles.total}>
              Finalizar Compra
            </p> 
          </button>
          
        </div>
        {/* fim do preço total e frete */}

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

export default connect(mapStateToProps, mapDispatchToProps)(Resumo)
