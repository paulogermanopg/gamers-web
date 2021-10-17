import React, { Component } from 'react'
import styles from '../../styles/Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faShoppingBag, faGamepad, faUser } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  render() {
    return (
        <header className={styles.header}>

            {/* bloco do logo que via para home */}
            <button className={styles.Button}>
              <h1>
                Gamer$
              </h1>
            </button>
            {/* fim do bloco que via para home */}
              

            {/* bloco da pesquisa */}
            <div className={styles.containerSearch}>

              <input 
                type='text' placeholder='Qual jogo está procurando?'/>

              <button className={styles.searching}>   
                <FontAwesomeIcon icon={faSearch} size='2x' color='#222' />
              </button>
              
            </div>
            {/* fim do bloco da pesquisa */}


            <div className={styles.opcoes}>

              <button className={styles.Button}>
                <div className={styles.buttonChoice}>
                    <FontAwesomeIcon icon={faUser} size='2x' color='#fff'/>
                </div>
                <p>Usuário</p>
              </button>

              <button className={styles.Button}>
                <div className={styles.buttonChoice}>
                    <FontAwesomeIcon icon={faShoppingBag} size='2x' color='#fff'/>
                </div>
                <p>Produtos</p>
              </button>

              <button className={styles.Button}>
                <div className={styles.buttonChoice}>
                    <FontAwesomeIcon icon={faGamepad} size='2x' color='#fff'/>
                </div>
                <p>Área Gamer</p>
              </button>

            </div>
            
            
            
            <button className={styles.Button}>
              <p>0</p>
              <div className={styles.carrinho}>
                  <FontAwesomeIcon icon={faShoppingCart} size='2x' color='#fff'/>
              </div>
            </button>
            
            
        </header>
    )
  }
}

export default Header