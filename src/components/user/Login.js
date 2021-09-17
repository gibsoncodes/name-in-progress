import { useState } from "react";
import {Link, Redirect} from 'react-router-dom'


import React from 'react'

const Login = ({toLogin}) => {
    const initialState = {
        email: "",
        password: "",
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = (event) => {
        event.preventDefault();
        toLogin(formState);
    }
    
    const handleChange = (event) => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label className="form-email" htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
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
                <button type="submit" className="signup-btn">GO</button>
            </form>
            <Link to="/signup">looking to buy some art? lets be friends, signup here.</Link>
        </div>
    )
}

export default Login
