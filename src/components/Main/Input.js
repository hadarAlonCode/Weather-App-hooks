import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react'

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
        width: "40vw",
        backgroundColor: "rgba(255, 255, 255, 0.11)",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color: "white",

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
        setCity(e.target.value)
    }

    const clickSearch = () => {
       console.log(city);
       props.CityStore.getLocation(city)
       
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
                    <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                    </IconButton>
                </Paper>
            </Grid>


        </div>

    );

}))

export default Input;