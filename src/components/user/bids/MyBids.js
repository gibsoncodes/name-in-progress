import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ActiveBid from './ActiveBid'
import BidHistory from './BidHistory'
import WonBids from './WonBids'

const MyBids = ({bids, getActiveBids, getAllBids, getWonBids}) => {
    const [history, setHistory] = useState(false);
    const [wins, setWins] = useState(false);

    let bidData;

    if (!bids.active) {
        getActiveBids()
    } else {
        console.log(bids)
        bidData = bids.active.map(bid => {
            return <ActiveBid bid={bid} />
        })
    }

    return (
        <div className="my-bids-container">
            <div className="active-bids">
                {bidData}
            </div>
            <div className="all-bids">
                <button onClick={() => setHistory(!history)}>View All Bids</button>
                {history ? <BidHistory bids={bids} getAllBids={getAllBids} /> : <p className="no-bids">:&#40; buy my art</p> }
            </div>
            <div className="winning-bids">
                <button onClick={() => setWins(!wins)}>View Winning Bids</button>
                {wins ? <WonBids bids={bids} getWonBids={getWonBids} /> : <p className="no-bids">:&#40; buy my art... harder</p>}
            </div>
        </div>
    )
}

export default MyBids
