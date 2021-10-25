import React, { Component } from 'react'
import styles from '../../styles/BlocoJogo.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons'

function BlocoJogo(props) {

    return (
      <div>

        <span className={styles.container}>

            <div className={styles.blocoJogo}>

              <img src={`/static/images/jogos/${props.image}`} alt="slide-img" className={styles.img}></img>
              
              <div>

                <p className={styles.nome}>{props.name}</p>

                <span>
                  <FontAwesomeIcon icon={faStar} size='lg' 
                    color={props.score >= 100 ? '#ffe135' : '#fff'}/>
                  <FontAwesomeIcon icon={faStar} size='lg' 
                    color={props.score >= 200 ? '#ffe135' : '#fff'}/>
                  <FontAwesomeIcon icon={faStar} size='lg' 
                    color={props.score >= 300 ? '#ffe135' : '#fff'}/>
                  <FontAwesomeIcon icon={faStar} size='lg' 
                    color={props.score >= 400 ? '#ffe135' : '#fff'}/>
                  <FontAwesomeIcon icon={faStar} size='lg' 
                    color={props.score >= 500 ? '#ffe135' : '#fff'}/>
                </span>

                <div className={styles.acoes}>

                  <button>
                    <FontAwesomeIcon icon={faHeart} size='lg' 
                      color='#fff'/>
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faShareAlt} size='lg' 
                      color='#fff'/>
                  </button>

                </div>

                <p className={styles.descricao}>{props.descricao}</p>

                <button className={styles.buttonSaibaMais}>
                  <p className={styles.saibaMais}>Saiba mais</p>
                </button>
                
              </div>

            </div>
            
        </span>

      </div>
    )
}


export default BlocoJogo