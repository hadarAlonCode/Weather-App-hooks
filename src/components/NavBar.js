import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "../styles/components/navBar.scss"
import ToggleButtons from "../components/ToggleButtons"
import ResponsiveMenu from 'react-responsive-navbar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

class NavBar extends Component {


    constructor() {
        super()
        this.state = {
            openNavBar: false
        }
    }

    conrtolNav = () => {
        if (this.state.openNavBar) {
            this.setState({
                openNavBar: false
            })
        } else {
            this.setState({
                openNavBar: true
            })
        }
    }

    render() {


        return (
            <div>
                {/* <div className="navBar_mobie">jndjksndf</div> */}
                <div className="navBar_mobie">
                
                    <ResponsiveMenu
                    
                        menuOpenButton={<div><MenuIcon onClick={this.conrtolNav} className="menuIcon"/></div> }
                        menuCloseButton={<div className="closeNav"><CloseIcon  onClick={this.conrtolNav} className="menuIcon"/></div>}
                        // menuOpenButton={<i onClick={this.conrtolNav} className="fas fa-bars"></i>}
                        // menuCloseButton={<i onClick={this.conrtolNav} className="fas fa-times"></i>}
                        changeMenuOn="765px"
                        largeMenuClassName="large-menu-classname"
                        smallMenuClassName="small-menu-classname"
                        menu={
                            <div id={this.state.openNavBar ? "openNav" : "closeNav"} className="listItems">
                                <Link to={`/`} className="nav-link">Home</Link>
                                <Link to={`/favorites`} className="nav-link">Favorites</Link>
                                <div className="nav-link"><ToggleButtons /></div>

                            </div>
                        }
                    />

                </div>
            </div>
        );
    }
}

export default NavBar;