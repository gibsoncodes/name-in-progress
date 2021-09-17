import { useState } from 'react'
import Countdown from './Countdown'
import Artwork from './Artwork'
import { Redirect } from 'react-router-dom'

const Auction = ({auction, toBid, artwork}) => {
    const initState = {bid: "", auctionId: auction._id}
    const [formState, setFormState] = useState(initState)
    const [success, setSuccess] = useState("")
    const time = new Date(auction.time.end)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formState.bid < auction.currentMax + 1) {
            alert("must place a bid greater or ewual to minimum bid value")
        } else {
            toBid(formState)
        }
        setFormState(initState);
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div className="auction-container">
            <Artwork artwork={artwork} />
            <h2 className="current-max">{auction.currentMax}</h2>
            <h4 className="auction-ends">Auction Ends</h4>
            <Countdown expiryTimestamp={time} />
            <form onSubmit={handleSubmit} className="bid-form">
                <label className="bid" htmlFor="bid">Bid</label>
                <input
                    id="bid"
                    type="text"
                    onChange={handleChange}
                    value={formState.bid}
                />
                <button type="submit" className="bid-btn">Place Bid</button>
            </form>
            <p className="minimum-bid">minimum bid: {auction.currentMax + 1}$</p>
        </div>
    )
}

export default Auction