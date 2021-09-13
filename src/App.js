import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import User from './components/user/User';
import About from './components/about/About';
import Entry from './components/about/Entry';
import Signup from './components/user/Signup';
import Home from './components/Home';
import Super from './components/super/Super';

function App() {

    const [artworks, setArtworks] = useState(null)
    const [user, setUser] = useState(null)

    const getArtworks = () => {
        console.log("hi")
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/art"
        })
        .then(res => {
            console.log(res.data)
            setArtworks(res.data)
        })
    }

    const getAuctions = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/art/auction"
        })
        .then(res => {
            setArtworks(res.data)
        })
    }

    const toBid = (data) => {
        const payload = data;
        axios({
            method: "POST",
            data: payload,
            withCredentials: true,
            url: "http://localhost:4000/art/auction/bid"
        })
        .then(() => {
            getUser()
        })
    }

    const toLogin = (data) => {
        const payload = data;
        axios({
            method: "POST",
            data: payload,
            withCredentials: true,
            url: "http://localhost:4000/user/login"
        })
        .then(() => {
            getUser()
        })
        
    }

    const toLogout = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/user/logout"
        })
        .then(res => {
            console.log(res.data)
        })
        
    }

    const toSignup = (data) => {
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

    const toAuction = (data) => {
        const payload = data;
        axios({
            method: "POST",
            data: payload,
            withCredentials: true,
            url: "http://localhost:4000/art/auction"
        })
        .then(res => {
            console.log(res.data)
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        getArtworks()
    }, [])

    return (
      <div className="App">
          <nav>
            <Link to="/user">profile</Link>
            <Link to="/about">about</Link>
            <Link to="/super">riley</Link>
            <Link to="/">home</Link>
          </nav>
          <main>
            <Route exact path="/" render={() => <Home artworks={artworks} />} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/user" component={User} />
            <Route exact path="/super" render={() => <Super toAuction={toAuction} artworks={artworks} />} />

            {/* <Signup toSignup={toSignup} /> */}
            {/* {!user ? <Login toLogin={toLogin} /> : <User user={user} toLogout={toLogout}/>} */}
          </main>
      </div>
    );
}

export default App;
