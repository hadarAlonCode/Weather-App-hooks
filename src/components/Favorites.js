import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import FavoriteCity from "./Favorites/FavoriteCity"
import "../styles/components/favorites.scss"



@inject("CityStore", "FavoriteStore")
@observer

class Favorites extends Component {

    render() {

        
        return (
            <div className="favorites_box">
               <h1 className="favorites_title">Favorites</h1>
               <div className="favoritesSection">{this.props.FavoriteStore.favoriteCities.map( c => <FavoriteCity city={c} key={c.key} />)}</div> 
            </div>
        );
    }
}

export default Favorites;