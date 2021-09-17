import React from 'react'

const WonBids = ({bids, getWonBids}) => {
    if (!bids.won) {
        getWonBids()
    }

    const wonBids = bids.map(bid => {
        return ("")
    })

    return (
        <div>
            {wonBids}
        </div>
    )
}

export default WonBids
