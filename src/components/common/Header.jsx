import React, { Component } from 'react'
import styles from '../../styles/common/Header.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faShoppingBag, faGamepad, faUser } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
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
                type='text' placeholder='Qual jogo está procurando?'/>

              <button className={styles.searching}>   
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
                <p>0</p>
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

export default Header