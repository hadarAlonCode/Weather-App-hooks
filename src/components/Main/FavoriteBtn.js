import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/cityRow.scss"
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import "../../styles/components/favoriteBtn.scss"


@inject("CityStore", "FavoriteStore")
@observer


class FavoriteBtn extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         favorite: false,
    //     }
    // }


    handleChange = (event) => {

        this.props.CityStore.favorite()

        event.target.checked ? this.props.FavoriteStore.addToFavorites(this.props.CityStore.city.cityKey, this.props.CityStore.city.name)
            : this.props.FavoriteStore.removeFromFavorites(this.props.CityStore.city.cityKey)
    };

    render() {

        return (
            <div className="favoriteBtn">
                <FormGroup row>
                    <FormControlLabel
                        className="favoriteIcon"
                        onChange={this.handleChange}
                        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedA" checked={this.props.CityStore.city.isFavorite} />}
                    // label="Add to favorite"
                    />
                </FormGroup>
            </div>
        );
    }
}

export default FavoriteBtn;