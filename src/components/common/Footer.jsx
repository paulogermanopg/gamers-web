import React, { Component } from 'react'
import styles from '../../styles/common/Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareAlt, faThumbsUp, faCamera, faPhone } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render (){
        return (
            <footer className={styles.footer}>
                <p className={styles.logo}>Gamer$</p>

                <div className={styles.center}>
                    <p className={styles.detalhes}>{`2021 Empresa de Games e distribuição`}</p>
                </div>
                

                {/* Parte para as mídias sociais */}
                <div className={styles.social}>
                    <a href="">
                        <FontAwesomeIcon icon={faShareAlt} size='lg' color='#222' color='#fff' />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faThumbsUp} size='lg' color='#222' color='#fff' />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faPhone} size='lg' color='#222' color='#fff' />
                    </a>
                    <a href="">
                        <FontAwesomeIcon icon={faCamera} size='lg' color='#222' color='#fff' />
                    </a>  
                </div>
                {/* fim das mídias sociais */}
                
            </footer>
        )
    }
}

export default Footer