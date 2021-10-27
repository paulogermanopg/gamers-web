import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../styles/carrinho/Resumo.module.css'

class Resumo extends Component {
  state = {
    carrinho: this.props.carrinho,
  }
  
  render() {
    return (
      <div>
        <p className={styles.titulo}>Resumo</p>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(Resumo)
