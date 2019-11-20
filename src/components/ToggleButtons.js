import React from 'react';
import "../styles/components/header.scss"
import { observer, inject } from 'mobx-react'
import Switch from '@material-ui/core/Switch';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness5Icon from '@material-ui/icons/Brightness5';

const ToggleButtons = inject("CityStore", "HeaderStore")(observer(function (props) {

    const changeMode = () => {
        props.HeaderStore.changeMode()
    };

    const colorToggle = () => {
        if (props.HeaderStore.isLight) {
            return "light-Mode"
        } else {
            return "dark-Mode"
        }
    }

    const changeTempMode = () => {
        props.HeaderStore.changeTemp()
    }

        return (
            <div className="toggleSection">
                <div className="lightMode" id={colorToggle()}>
                    <Brightness5Icon />
                    <Switch
                        checked={!props.HeaderStore.isLight}
                        onChange={changeMode}
                        value="checkedB"
                        color="default"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <Brightness3Icon />
                </div>
                
                <div className="tempMode" id={colorToggle()}>
                    <div className="tempType">°C</div>
                    <Switch
                        checked={!props.HeaderStore.celsiusType}
                        onChange={changeTempMode}
                        value="checkedA"
                        color="default"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <div className="tempType">°F</div>
                </div>

            </div>

        )
    }));

export default ToggleButtons;