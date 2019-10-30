import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/cityRow.scss"
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import "../../styles/components/favoriteBtn.scss"

@inject("CityStore")
@observer

class FavoriteBtn extends Component {
    constructor(){
        super()
        this.state = {
            favorite: false,    
         }
    }

    addToFavorite=()=>{
        console.log('add to favorite');  
    }

    removeFromFavorite=()=>{
        console.log('remove from favorite');  

    }

    handleChange = (event) => {
        console.log(event.target.checked); 
        this.setState({favorite: event.target.checked} );

        if (event.target.checked == true){
            this.addToFavorite()
        } else {
            this.removeFromFavorite()
        }

      };

    render() {
        return (
            <div className="favoriteBtn">
            <FormGroup row>   
                <FormControlLabel
                    className="favoriteIcon"
                    onChange={this.handleChange}
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                    // label="Add to favorite"
                />
            </FormGroup>
        </div>
        );
    }
}

export default FavoriteBtn;