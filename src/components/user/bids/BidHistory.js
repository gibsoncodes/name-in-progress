import React from 'react'
import { Link } from 'react-router-dom'

const BidHistory = ({bids, getAllBids}) => {
    let bidHistory;
    if (bids.all) {
        bidHistory = bids.map(bid => {
            return (<li className="bid-history-item">{bid.bidAmount}, {bid.createdAt}, <Link to={`/auctions/${bid.auction}`}>Auction Results</Link></li>);
        })
    } else {
        getAllBids()
    }

    return (
        <div>
            {bidHistory}
        </div>
    )
}

export default BidHistory
