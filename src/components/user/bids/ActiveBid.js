import React from 'react'

const ActiveBid = ({bid}) => {
    console.log(bid)
    return (
        <div>
            <h4>{bid.bidAmount}</h4>
            <p>{bid.auction}</p>
        </div>
    )
}

export default ActiveBid
