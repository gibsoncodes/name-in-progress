import { useState } from 'react'

const Auction = ({auction, toBid}) => {
    const initState = {bid: "", auctionId: auction.id}
    const [formState, setFormState] = useState(initState)
    const [timer, setTimer] = useState(initiateTimer)

    function initiateTimer() {
        const endTime = auction.time.end;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        toBid(formState)
        setFormState(initState);
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div className="auction-container">
            <h2 className="current-max">{auction.currentMax}</h2>
            <h4 className="auction-ends">Auction Ends</h4>
            <h3>{timer}</h3>
            <form className="bid-form">
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