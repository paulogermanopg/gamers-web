import React, { Component } from 'react'
import styles from '../../styles/Carrinho/JogoContentCarrinho.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

class JogoContentCarrinho extends Component {
    state = {
        quantidade: 1,
        produtoRetirado: false,
    }

    //Aumenta a quantidade do produto e quando menor que 1 ele exclui
    quantidade = qtd => {

        if ((this.state.quantidade + qtd) < this.state.quantidade){
            
            if ((this.state.quantidade + qtd) < 1){
                this.setState({ 
                    quantidade: 0,
                    produtoRetirado: true 
                })
            } else {
                this.setState({ 
                    quantidade: this.state.quantidade + qtd,
                    produtoRetirado: false
                })
            }
            
            this.props.onAdicionar && this.props.onAdicionar(this.props.jogo.id,'-')
            
        } else {

            this.setState({ 
                quantidade: this.state.quantidade + qtd,
                produtoRetirado: false
            })
            this.props.onAdicionar && this.props.onAdicionar(this.props.jogo.id,'+')
            
        }

    }

    render() {
        return (
            <div className={styles.container}>  

                {/* Capa e nome do jogo */}
                <span className={styles.spanImg}>
                    <img src={`/static/images/jogos/${this.props.jogo.image}`} alt="slide-img" 
                        className={this.state.produtoRetirado ? styles.imgApagada : styles.img}></img>
                </span>

                <p className={this.state.produtoRetirado ? styles.nomeRiscado : styles.nome}>
                    {this.props.jogo.name}
                </p>
                {/* fim da capa e nome */}


                {/* Botão para mudar a quantidade do produto */}
                <span className={styles.quantidade}>
                    <button 
                        className={
                            this.state.produtoRetirado ? styles.buttonDisabed : styles.button
                        }
                        onClick={() => this.quantidade(-1)}
                        disabled={this.state.produtoRetirado}>

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

                {/* parte do preço */}
                <p className={styles.preco}>
                    R$ {parseFloat((this.props.jogo.price * this.state.quantidade).toFixed(2))}
                </p>
                {/* fim */}

            </div>
    )
  }
}

export default JogoContentCarrinho