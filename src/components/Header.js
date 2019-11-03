import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "../styles/components/header.scss"
import { observer, inject } from 'mobx-react'
import Switch from '@material-ui/core/Switch';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import NavBar from "../components/NavBar"
import ToggleButtons from "../components/ToggleButtons"

@inject("CityStore", "HeaderStore")
@observer

class Header extends Component {
    constructor(){
        super()
        this.state  = {
            isMobile: false //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

UNSAFE_componentWillMoun() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isMobile: window.innerWidth < 766 });
  }


    changeMode = () => {
        this.props.HeaderStore.changeMode()

    };

    colorToggle = () => {
        if (this.props.HeaderStore.isLight) {
            return "light-Mode"
        } else {
            return "dark-Mode"
        }
    }

    changeTempMode = () => {
        this.props.HeaderStore.changeTemp()
    }




    render() {

        // console.log(this.state.isMobile);
        

        return (
            <div className="navBar_mobie">
                            {this.state.isMobile ?
                            <NavBar />
                            :
                            <div className="navBar" id={this.props.HeaderStore.isLight ? "light_mode" : "dark_mode"} >

                            <div className="logo" ><strong>Hadar Weather App</strong></div>
                
                            <ToggleButtons/>
            
                            <div className="headerLinks" >
                                <div><Link to={`/`} className="link">Home</Link></div>
                                <div><Link to={`/favorites`} className="link">Favorites</Link></div>
                            </div>
            
                        </div>                        }

                </div>
        );
    }
}

export default Header;