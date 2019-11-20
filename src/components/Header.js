import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import "../styles/components/header.scss"
import { observer, inject } from 'mobx-react'
import NavBar from "../components/NavBar"
import ToggleButtons from "../components/ToggleButtons"

const Header = inject("CityStore", "HeaderStore")(observer(function (props) {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        updatePredicate();
        window.addEventListener("resize", updatePredicate);
    }, [])

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < 766)
    }

    return (
        <div className="navBar_mobie">
            {isMobile ?
                <NavBar />
                :
                <div className="navBar" id={props.HeaderStore.isLight ? "light_mode" : "dark_mode"} >
                    <div className="logo" > <strong><Link className="homeLink" to={`/`}> Weather App</Link></strong></div>
                    <ToggleButtons />
                    <div className="headerLinks" >
                        <div><Link to={`/`} className="link">Home</Link></div>
                        <div><Link to={`/favorites`} className="link">Favorites</Link></div>
                    </div>

                </div>}
        </div>
    );
}))

export default Header;