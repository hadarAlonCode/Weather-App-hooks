import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "../styles/components/navBar.scss"
import ToggleButtons from "../components/ToggleButtons"
import ResponsiveMenu from 'react-responsive-navbar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function NavBar(props) {

    const [openNavBar, setOpenNavBar] = useState(false)

    const conrtolNav = () => {
        openNavBar ? setOpenNavBar(false) : setOpenNavBar(true)
    }

    return (
        <div>
            <div className="navBar_mobie">
                <ResponsiveMenu
                    menuOpenButton={<div><MenuIcon onClick={conrtolNav} className="menuIcon" /></div>}
                    menuCloseButton={<div className="closeNav"><CloseIcon onClick={conrtolNav} className="menuIcon" /></div>}
                    changeMenuOn="765px"
                    largeMenuClassName="large-menu-classname"
                    smallMenuClassName="small-menu-classname"
                    menu={
                        <div id={openNavBar ? "openNav" : "closeNav"} className="listItems">
                            <Link to={`/`} className="nav-link">Home</Link>
                            <Link to={`/favorites`} className="nav-link">Favorites</Link>
                            <div className="nav-link nav-toggle-buttons"><ToggleButtons /></div>
                        </div>
                    }
                />
            </div>
        </div>
    );

}

export default NavBar;