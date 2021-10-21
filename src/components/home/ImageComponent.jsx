import React from 'react'

function ImageComponent({src}) {
    let imgStyles = {
        width: 100+'%',
        height: 'auto',
    }
    return (
        <img src={src} alt="slide-img" style={imgStyles}></img>
    )
}

export default ImageComponent