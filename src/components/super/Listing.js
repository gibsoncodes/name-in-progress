import React, {useState} from 'react'
import NewAuction from './NewAuction';


const Listing = ({artwork, toAuction}) => {

    const [auction, setAuction] = useState(false)

    let picture = "http://localhost:4000" + artwork.pictures[0];
    return (
        <div className="super-artwork">
            <img className="artwork-image" src={picture} alt={artwork.name}></img>
            <h2 className="artwork-name">{artwork.name}</h2>
            <button onClick={() => setAuction(true)}>set auction</button>
            {auction ? <NewAuction toAuction={toAuction} artworkId={artwork.id} /> : null}
        </div>
    )
}

export default Listing
