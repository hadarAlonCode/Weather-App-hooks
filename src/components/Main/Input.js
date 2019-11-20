import React, { useState } from 'react';
import { observer, inject } from 'mobx-react'
import { ToastsStore } from 'react-toasts';
import "../../styles/components/input.scss"
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    }
}));

const Input = inject("CityStore")(observer(function (props) {
    const classes = useStyles()
    const [city, setCity] = useState("")
    const [char, setChar] = useState("")

    const onChange = (e) => {
        let val = e.target.value.replace(/[^A-Za-z\s]/gi, "");
        setChar(val)
        if (e.target.value.match(/^[A-Za-z\s]/, "")) {
            props.CityStore.getAutoComplete(e.target.value)
        }
        else {
            ToastsStore.error("Please enter a valid city in English letters only")
            return false
        }
    }

    const handleInput = (e) => {
        setCity(e.target.value)
    }

    const clickSearch = async () => {
        if (city === "") {
            ToastsStore.error("Please enter a valid city in English letters only")
        } else {
            let citySearch = city.trim()
            let searchCity = await props.CityStore.getLocation(citySearch)
            setCity("")
            if (!searchCity) {
                return ToastsStore.error("Please enter a valid city")
            }
        }
    }

    const keyPressed = (event) => {
        if (event.key === "Enter") {
            clickSearch()
        }
    }

    return (
        <div className="mainInput">
            <input className="input" type="text" onChange={onChange} value={char} list="browsers" onKeyPress={keyPressed} placeholder="Search City" onInput={handleInput}></input>
            <datalist id="browsers">
                {props.CityStore.autoCompleteLocation.map((c, i) => <option key={c.Key}>{c.LocalizedName}</option>)}
            </datalist>
            <Fab aria-label="add" className={classes.fab}>
                <SearchIcon className="searchIcon" onClick={clickSearch}>Search</SearchIcon>
            </Fab>
        </div>
    );

}))

export default Input;