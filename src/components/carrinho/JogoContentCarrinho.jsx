import React, { Component } from 'react'
import styles from '../../styles/Carrinho/JogoContentCarrinho.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

class JogoContentCarrinho extends Component {
    state = {
        quantidade: 1
    }

    quantidade = qtd => {
        this.setState({ quantidade: this.state.quantidade + qtd })
    }

    render() {
        return (
            <div className={styles.container}>  

                {/* Capa e nome do jogo */}
                <span className={styles.spanImg}>
                    <img src={`/static/images/jogos/${this.props.jogo.image}`} alt="slide-img" className={styles.img}></img>
                </span>

                <p className={styles.nome}>
                    {this.props.jogo.name}
                </p>
                {/* fim da capa e nome */}


                {/* Botão para mudar a quantidade do produto */}
                <span className={styles.quantidade}>
                    <button className={styles.button}
                        onClick={() => this.quantidade(-1)}>

                        <FontAwesomeIcon icon={faMinus} size='lg' 
                            color='#fff'/>

                    </button>

                    <p className={styles.numero}>
                        {this.state.quantidade}
                    </p>

                    <button className={styles.button}
                        onClick={() => this.quantidade(1)}>
                        <FontAwesomeIcon icon={faPlus} size='lg' 
                            color='#fff'/>
                    </button>
                </span>
                {/* fim do botão */}

                <p className={styles.preco}>
                    R$ {this.props.jogo.price * this.state.quantidade}
                </p>

      </div>
    )
  }
}

export default JogoContentCarrinho