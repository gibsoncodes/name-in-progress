import React from 'react'

const Artwork = ({artwork}) => {
    return (
        <div className="artwork">
            <img className="artwork-image" src={artwork.image} alt={artwork.name}></img>
            <h2 className="artwork-name">{artwork.name}</h2>
            <p className="artwork-description">{artwork.description}</p>
            <p className="artwork-materials">{artwork.materials}</p>
        </div>
    )
}

export default Artwork
