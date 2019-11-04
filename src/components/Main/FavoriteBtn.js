import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/cityRow.scss"
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import "../../styles/components/favoriteBtn.scss"
import { ToastsContainer, ToastsStore } from 'react-toasts';


@inject("CityStore", "FavoriteStore")
@observer


class FavoriteBtn extends Component {

    handleChange = (event) => {
        this.props.CityStore.favorite()

        if(event.target.checked){
            this.props.FavoriteStore.addToFavorites(this.props.CityStore.city.cityKey, this.props.CityStore.city.name)
            ToastsStore.success(`${this.props.CityStore.city.name} added to your favorites`)

        }else{
            this.props.FavoriteStore.removeFromFavorites(this.props.CityStore.city.cityKey)
            ToastsStore.info("Removed from favorites")

        }
      
    };

    render() {

        return (
            <div className="favoriteBtn">
                <FormGroup row>
                    <FormControlLabel
                        onChange={this.handleChange}
                        control={<Checkbox icon={<FavoriteBorder 
                        className="favoriteIcon" 
                        style={{ color: "white" }} />} 
                        checkedIcon={<Favorite className="favoriteIcon" />} 
                        value="checkedA" 
                        checked={this.props.CityStore.city.isFavorite} />}
                    />
                </FormGroup>
                <ToastsContainer store={ToastsStore} />
            </div>
        );
    }
}

export default FavoriteBtn;