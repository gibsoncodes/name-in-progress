import { useState } from 'react';

const Signup = ({toSignup}) => {
    const initialState = {
        username: "",
        email: "",
        password: "",
        password2: "",
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formState.password !== formState.password2) {
            alert("passwords must match")
        } else {
            toSignup(formState)
            setFormState(initialState)
        }
    }

    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <label className="form-username" htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    onChange={handleChange}
                    value={formState.username}
                />
                <label className="form-email" htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    onChange={handleChange}
                    value={formState.email}
                />
                <label className="form-password" htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    onChange={handleChange}
                    value={formState.password}
                />
                <label className="form-password2" htmlFor="password2">Password again</label>
                <input
                    id="password2"
                    type="password"
                    onChange={handleChange}
                    value={formState.password2}
                />
                <button type="submit" className="signup-btn">GO</button>
            </form>
        </div>
    )
}

export default Signup
