import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Signup from './components/user/Signup'
import Login from './components/user/Login'
import User from './components/user/User';

function App() {


    const [user, setUser] = useState(null)

    // const toBid = (data) => {


    // }

    const toLogin = (data) => {
        const payload = data;
        axios({
            method: "POST",
            data: payload,
            withCredentials: true,
            url: "http://localhost:4000/user/login"
        })
        .then(() => {
            <Redirect to="/user" />
        })
        
    }

    const toLogout = () => {
        // const payload = data;
        axios({
            method: "POST",
            // data: payload,
            withCredentials: true,
            url: "http://localhost:4000/user/login"
        })
        .then(res => {
            console.log(res.data)
        })
        
    }

    const toSignup = (data) => {
        console.log("beepop")
        const payload = data;
        axios({
            method: "POST",
            data: payload,
            withCredentials: true,
            url: "http://localhost:4000/user/new"
        })
        .then(res => {
            console.log(res.data)
        })

    }

    const getUser = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/user/"
        })
        .then(res => {
            setUser(res.data)
        })
    }

    useEffect(() => {
        getUser()
    }, [user])

    return (
      <div className="App">
          <Signup toSignup={toSignup} />
          <Login toLogin={toLogin} />
          <User user={user} toLogout={toLogout}/>
      </div>
    );
}

export default App;
