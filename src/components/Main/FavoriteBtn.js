import React from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/cityRow.scss"
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import "../../styles/components/favoriteBtn.scss"
import { ToastsContainer, ToastsStore } from 'react-toasts';

const FavoriteBtn = inject("CityStore", "FavoriteStore")(observer(function (props) {

    const handleChange = (event) => {
        props.CityStore.favorite()
        if (event.target.checked) {
            props.FavoriteStore.addToFavorites(props.CityStore.city.cityKey, props.CityStore.city.name)
            ToastsStore.success(`${props.CityStore.city.name} added to your favorites!`)
        } else {
            props.FavoriteStore.removeFromFavorites(props.CityStore.city.cityKey)
            ToastsStore.info("Removed from favorites")
        }
    };

    return (
        <div className="favoriteBtn">
            <FormGroup row>
                <FormControlLabel
                    onChange={handleChange}
                    control={<Checkbox icon={<FavoriteBorder
                        className="favoriteIcon"
                        style={{ color: "white" }} />}
                        checkedIcon={<Favorite className="favoriteIcon" />}
                        value="checkedA"
                        checked={props.CityStore.city.isFavorite} />}
                />
            </FormGroup>
            <ToastsContainer store={ToastsStore} />
        </div>
    );
}))

export default FavoriteBtn;