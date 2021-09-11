import {useState} from 'react'
import { Link } from 'react-router-dom'
import Artwork from './Artwork'

const ArtList = ({artworks}) => {

    const data = []

    for (let i = 0; i < artworks.length; i++) {
        data.push(
            <Artwork key={artworks[i].name} artwork={artworks[i]}/>
        )
    }

    return (
        <div className="artlist-container">
            {data}
        </div>
    )
}

export default ArtList
