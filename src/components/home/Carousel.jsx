import React, {Component} from 'react'
import styles from '../../styles/home/Carousel.module.scss'
import ImageComponent from './ImageComponent'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

let carouselArray = [
    <ImageComponent src={'/static/images/carousel/horizon_zero_dawn.jpg'} />,
    <ImageComponent src={'/static/images/carousel/call_of_duty_wwii.jpg'} />,
    <ImageComponent src={'/static/images/carousel/fifa_18.jpg'} />,
    <ImageComponent src={'/static/images/carousel/super-mario-odyssey-switch-hero.jpg'} />,
    <ImageComponent src={'/static/images/carousel/mortal_kombat.jpg'} />,
    <ImageComponent src={'/static/images/carousel/the_witcher_3.jpg'} />,
    <ImageComponent src={'/static/images/carousel/sombras_de_mordor.jpg'} />
]

class Carousel extends Component {
    state = {
        x: 0,
    }

    componentDidMount = () => {
        setInterval( () => {
            this.direita()
        }, 4500 )
    }

    esquerda = () => {
        //percorrerá pelos quadros
        //fará voltar para o último quadro acaso chegue ao primeiro
        this.state.x === 0 ? this.setState({ x: (-100*(carouselArray.length-1)) }) : this.setState({ x: this.state.x+100 })
    }

    direita = () => {
        //percorrerá pelos quadros
        //fará voltar para o primeiro quadro acaso chegue ao último
        (this.state.x === -100*(carouselArray.length-1)) ? this.setState({ x: 0 }) : this.setState({ x: (this.state.x-100) })
    }

    render () {
        return (
            <div className={styles.carousel}>
                
                {
                    carouselArray.map((item,index)=> {
                        return (
                            <div  key={index} className={styles.quadro} style={{transform:`translateX(${this.state.x}%)`}}>
                                {item}
                            </div>
                        )
                    })
                }

                <button className={styles.esquerda}
                    onClick={this.esquerda}>
                    <FontAwesomeIcon icon={faChevronLeft} size='2x' color='#fff' />
                </button>

                <button className={styles.direita}
                    onClick={this.direita}>
                    <FontAwesomeIcon icon={faChevronRight} size='2x' color='#fff' />
                </button>

            </div>
        )
    } 
}

export default Carousel