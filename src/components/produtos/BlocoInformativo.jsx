import React, { Component } from 'react'
import styles from '../../styles/produtos/BlocoInformativo.module.css'

class BlocoCompra extends Component {
    render(){
        return (
            <div>
                <p className={styles.titulo}>
                    Informções do Jogo
                </p>
                
                <div className={styles.container}>
                    <p className={styles.descricao}>
                        {this.props.jogo.descricao}
                    </p>
                </div>
            </div>
          )
    }
    
}


export default BlocoCompra