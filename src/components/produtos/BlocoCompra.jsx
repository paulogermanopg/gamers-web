import React, { Component } from 'react'
import styles from '../../styles/BlocoCompra.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class BlocoCompra extends Component {
    render(){
        return (
            <div className={styles.container}>
                <p className={styles.preco}>
                    R$ {this.props.jogo.price}
                </p>
                <p className={styles.dividido}>
                    Dividido em até 8x de R$ {parseFloat((this.props.jogo.price/8).toFixed(2))} no cartão de crédito.
                </p>
                <button className={styles.button}>
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


export default BlocoCompra