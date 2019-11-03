import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "../styles/components/header.scss"
import { observer, inject } from 'mobx-react'
import Switch from '@material-ui/core/Switch';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness5Icon from '@material-ui/icons/Brightness5';

@inject("CityStore", "HeaderStore")
@observer

class Header extends Component {


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
        
        return (
            <div className="navBar" id={this.props.HeaderStore.isLight ? "light_mode" : "dark_mode"} >
                <div className="logo" ><strong>Hadar Weather App</strong></div>
                <div className="toggleSection">
                    <div className="lightMode" id={this.colorToggle()}>
                        <Brightness5Icon />
                        <Switch
                            checked = {!this.props.HeaderStore.isLight}
                            onChange={this.changeMode}
                            value="checkedB"
                            color="default"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <Brightness3Icon />
                    </div>
                    <div className="tempMode" id={this.colorToggle()}>
                        <div className="tempType">°C</div>
                        <Switch
                        checked= {!this.props.HeaderStore.celsiusType}
                            onChange={this.changeTempMode}
                            value="checkedA"
                            color="default"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <div className="tempType">°F</div>
                    </div>

                </div>

                <div className="headerLinks" >
                    <div><Link to={`/`} className="link">Home</Link></div>
                    <div><Link to={`/favorites`} className="link">Favorites</Link></div>
                </div>

            </div>
        );
    }
}

export default Header;