import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/common/Header.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faShoppingBag, faGamepad, faUser } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  state = {
    carrinho: this.props.carrinho,
    subTotal:  this.props.subTotal,
    frete: this.props.frete,
    total: this.props.total,
    formaDePagamento: this.props.formaDePagamento,
    busca: '',
  }

  //Varifica toda vez que houver atualização no estado da aplicação
  componentDidUpdate = prevProps => {
    if (prevProps != this.props) {
        this.setState({ 
            carrinho: this.props.carrinho,
            subTotal:  this.props.subTotal,
            frete: this.props.frete,
            total: this.props.total,
            formaDePagamento: this.props.formaDePagamento,
         })
    } 
  }
  
  buscar = () => {
    //Ainda a implementar
  }

  render() {
    return (
        <header className={styles.header}>

          <span className={styles.mobileContainer}>
            {/* bloco do logo que via para home */}
            <button className={styles.Button}>
              <Link href='/'>
                <h1>
                  Gamer$
                </h1>
              </Link>
            </button>
            {/* fim do bloco que via para home */}
              

            {/* bloco da pesquisa */}
            <div className={styles.containerSearch}>

              <input className={styles.input}
                type='text' placeholder='Qual jogo está procurando?'
                value={this.state.busca}
                onChange={e => this.setState({ busca: e.target.value })} />

              <button className={styles.searching}
                onClick={this.buscar}>   
                <FontAwesomeIcon icon={faSearch} size='2x' color='#222' />
              </button>
              
            </div>
            {/* fim do bloco da pesquisa */}


            {/* botões do cabeçalho */}
            <div className={styles.opcoes}>

              <Link href='/'>
                <button className={styles.Button}>
                    <div className={styles.buttonChoice}>
                      <FontAwesomeIcon icon={faUser} size='2x' color='#fff'/>
                    </div>
                    <p>Usuário</p>
                </button>
              </Link> 

              <Link href='/Produtos'>
                <button className={styles.Button}>
                  <div className={styles.buttonChoice}>
                      <FontAwesomeIcon icon={faShoppingBag} size='2x' color='#fff'/>
                  </div>
                  <p>Produtos</p>
                </button>
              </Link>

              <Link href='/AreaGamer'>
                <button className={styles.Button}>
                  <div className={styles.buttonChoice}>
                      <FontAwesomeIcon icon={faGamepad} size='2x' color='#fff'/>
                  </div>
                  <p>Gamer</p>
                </button>
              </Link>

            </div>
            {/* fim dos botões do cabeçalho */}
            
            
            {/* carrinho de compras */}
            <Link href='/Carrinho'>
              <button className={styles.Button}>
                <p>{this.state.carrinho.length}</p>
                <div className={styles.carrinho}>
                    <FontAwesomeIcon icon={faShoppingCart} size='2x' color='#fff'/>
                </div>
              </button>
            </Link>
            {/* fim do carrinho de compras */}
          </span>
          

          {/* bloco da pesquisa Para dispositivos móveis */}
          <div className={styles.containerSearchMobile}>

            <input className={styles.input}
              type='text' placeholder='Qual jogo está procurando?'/>

            <button className={styles.searching}>   
              <FontAwesomeIcon icon={faSearch} size='2x' color='#222' />
            </button>
            
          </div>
          {/* fim do bloco da pesquisa */}
                 
        </header>
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

export default connect(mapStateToProps)(Header)
