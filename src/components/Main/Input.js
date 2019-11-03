import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import { ToastsContainer, ToastsStore } from 'react-toasts';

import "../../styles/components/input.scss"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: "50vw",
        backgroundColor: "rgba(255, 255, 255, 0.295)",

        // @media "(max-width: 765px)"
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: "white",
        fontSize: "20px"

    },
    iconButton: {
        padding: 7,
        color: "white"
    }

}));

const Input = inject("CityStore")(observer(function (props) {


    const [city, setCity] = useState("")
    const classes = useStyles();


    const handleInput = (e) => {
        if (e.target.value.match(/^[A-Za-z]/)) {
            setCity(e.target.value)
        } else {
            // ToastsStore.error("Please enter a valid city in English letters only") 
            return false
        }

    }

    const clickSearch = async () => {
        if (city === "") {
            ToastsStore.error("Please enter a valid city in English letters only")
        } else {

            let searchCity = await props.CityStore.getLocation(city)
            setCity("")

            if (!searchCity) {
                return ToastsStore.error("Please enter a valid city")
            }

        }



    }



    return (
        <div className="mainInput">
            <Grid container justify="center">

                <Paper className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                    </IconButton>
                    <InputBase
                        onInput={handleInput}
                        className={classes.input}
                        placeholder="Search City"
                        inputProps={{ 'aria-label': 'Search City' }}
                    />
                    <IconButton onClick={clickSearch} className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <IconButton color="primary" className={classes.iconButton} aria-label="directions" >
                    </IconButton>
                </Paper>
                <ToastsContainer store={ToastsStore} />
            </Grid>


        </div>

    );

}))

export default Input;