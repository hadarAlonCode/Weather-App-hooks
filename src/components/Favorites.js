import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import FavoriteCity from "./Favorites/FavoriteCity"



@inject("CityStore", "FavoriteStore")
@observer

class Favorites extends Component {

    render() {

        
        return (
            <div>
               <div>{this.props.FavoriteStore.favoriteCities.map( c => <FavoriteCity city={c} key={c.key} />)}</div> 
            </div>
        );
    }
}

export default Favorites;