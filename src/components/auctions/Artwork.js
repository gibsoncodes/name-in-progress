import React from 'react'

const Artwork = ({artwork}) => {
    let picture = "http://localhost:4000" + artwork.pictures[0];

    return (
        <div className="artwork">
            <img className="artwork-image" src={picture} alt={artwork.name}></img>
            <h2 className="artwork-name">{artwork.name}</h2>
            <p className="artwork-description">{artwork.description}</p>
            <p className="artwork-materials">{artwork.materials}</p>
        </div>
    )
}

export default Artwork
