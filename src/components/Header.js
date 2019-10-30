import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "../Style/Header.css"

class Header extends Component {
    render() {
        return (
            <div className="navBar">
                <div className="logo"><strong>Hadar Weather App</strong></div>
                <div className="headerLinks">
                    <div><Link to={`/`} className="link">Home</Link></div>
                    <div><Link to={`/favorites`} className="link">Favorites</Link></div>
                </div>

            </div>
        );
    }
}

export default Header;