import React from 'react';
import { observer, inject } from 'mobx-react'
import FavoriteCity from "./FavoriteCity"
import "../../styles/components/favorites.scss"

const Favorites = inject("CityStore", "FavoriteStore")(observer(function (props) {
    return (
        <div className="favorites_box">
            <h1 className="favorites_title">Favorites</h1>
            <div className="favoritesSection">{props.FavoriteStore.favoriteCities.map(c => <FavoriteCity city={c} key={c.key} />)}</div>
        </div>
    );
}))

export default Favorites;