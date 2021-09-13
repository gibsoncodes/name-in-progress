import React from 'react'
import Listing from './Listing'

const Super = ({artworks, toAuction}) => {

    const data = []

    for (let i = 0; i < artworks.length; i++) {
        data.push(
            <Listing key={artworks[i].name} toAuction={toAuction} artwork={artworks[i]}/>
        )
    }

    return (
        <div className="artlist-container">
            {data}
        </div>
    )
}

export default Super
