import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, Redirect, Route } from "react-router-dom";
import User from './components/user/User';
import About from './components/about/About';
import Signup from './components/user/Signup';
import Home from './components/Home';
import Super from './components/super/Super';
import AuctionList from './components/auctions/AuctionList';
import MyBids from './components/user/bids/MyBids';

function App() {

    const [artworks, setArtworks] = useState(null)
    const [auctions, setAuctions] = useState(null)
    const [myBids, setMyBids] = useState({active: null, all: null, won: null})
    const [user, setUser] = useState(null)

    const getArtworks = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/art"
        })
        .then(res => {
            setArtworks(res.data)
        })
    }

    const getAllBids = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/bids/all"
        })
        .then(res => {
            setMyBids({...myBids, all: res.data})
        })
    }

    const getActiveBids = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/bids/active"
        })
        .then(res => {
            setMyBids({...myBids, active: res.data})
        })
    }

    const getWonBids = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/bids/active"
        })
        .then(res => {
            setMyBids({...myBids, won: res.data})
        })
    }

    const getAuctions = () => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/auctions/active"
        })
        .then(res => {
            setAuctions(res.data)
        })
    }

    const toBid = (data) => {
        const payload = data;
        axios({
            method: "POST",
            data: payload,
            withCredentials: true,
            url: "http://localhost:4000/bids"
        })
        .then((res) => {
            console.log(res)
            if (res.status === 200) {
                getAuctions()
            } 
        })
        .catch((err) => {
            window.location.replace("/user")
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
            setUser(null)
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
            console.log(res)
            setUser(res.data);
            <Redirect to="/user" />
        })
    }

    const toAuction = (data) => {
        const payload = data;
        axios({
            method: "POST",
            data: payload,
            withCredentials: true,
            url: "http://localhost:4000/auctions"
        })
        .then(res => {
            console.log(res.data)
        })
    }

    useEffect(() => {
        getUser()
        getArtworks()
        getAuctions()
    }, [])

    return (
      <div className="App">
          <nav>
            <Link to="/user">profile</Link>
            <Link to="/about">about</Link>
            <Link to="/super">riley</Link>
            <Link to="/auctions">Auction</Link>
            <Link to="/">home</Link>
          </nav>
          <main>
            <Route exact path="/" render={() => <Home artworks={artworks} />} />
            <Route exact path="/auctions" render={() => <AuctionList getArtworks={getArtworks} getAuctions={getAuctions} auctions={auctions} artworks={artworks} toBid={toBid}/>} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup"  render={() => <Signup toSignup={toSignup}/>}/>
            <Route exact path="/mybids"  render={() => <MyBids bids={myBids} getActiveBids={getActiveBids} getWonBids={getWonBids} getAllBids={getAllBids} />}/>            
            <Route exact path="/user" render={() => <User user={user} toLogout={toLogout} toLogin={toLogin} toSignup={toSignup} /> } />
            <Route exact path="/super" render={() => <Super toAuction={toAuction} artworks={artworks} />} />
          </main>
      </div>
    );
}

export default App;
