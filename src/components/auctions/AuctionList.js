import React from 'react'
import Auction from './Auction'

const AuctionList = ({auctions, artworks, toBid, getAuctions, getArtworks}) => {

    if (!auctions || !artworks) {
        getAuctions()
        getArtworks()
    }
    const data = []

    if (auctions && artworks) {
        for (let i = 0; i < auctions.length; i++) {
            
            let artwork = artworks.filter(item => item._id === auctions[i].artwork)
    
            data.push(
                <Auction key={auctions[i].name} auction={auctions[i]} artwork={artwork[0]} toBid={toBid}/>
            )
        }
    }

    return (
        <div className="artlist-container">
            {data}
        </div>
    )
}

export default AuctionList
