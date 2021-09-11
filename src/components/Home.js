import React from 'react'
import ArtList from './auctions/ArtList'

const Home = ({artworks}) => {
    return (
        <div>
            {artworks ? <ArtList artworks={artworks} /> : null}
        </div>
    )
}

export default Home
