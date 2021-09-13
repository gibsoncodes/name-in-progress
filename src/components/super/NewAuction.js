import React, {useState} from 'react'

const NewAuction = ({artworkId, toAuction}) => {
    const initState = {
        start: '',
        duration: 96,
    }
    const [formState, setFormState] = useState(initState)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            time: {
                start: formState.start,
                duration: formState.duration
            },
            artwork: artworkId,
        }
        toAuction(data);
        setFormState(initState);
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div className="super-new-auction">
            <form onSubmit={handleSubmit}>
                <label className="form-username" htmlFor="duration">Auction Duration</label>
                <input
                    id="duration"
                    type="number"
                    onChange={handleChange}
                    value={formState.duration}
                />
                <label className="form-username" htmlFor="start">Auction Start</label>
                <input
                    id="start"
                    type="datetime-local"
                    onChange={handleChange}
                    value={formState.start}
                />
                <button type="submit">list</button>
            </form>
        </div>
    )
}

export default NewAuction
