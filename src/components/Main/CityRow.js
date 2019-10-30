import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../Style/CityRow.css"

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

@inject("CityStore")
@observer

class CityRow extends Component {
    
    constructor(){
        super()
        this.state = {
            favorite: false,    
         }
    }
   
    iconsFun = () => {
        if (this.props.CityStore.icon <= 9) {
            return "https://developer.accuweather.com/sites/default/files/0" + this.props.CityStore.icon + "-s.png"
        } else {
            return "https://developer.accuweather.com/sites/default/files/" + this.props.CityStore.icon + "-s.png"
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
            <div className="box-firstSection">
                <div className="box-first">
                    <div className="iconPhoto"><img src={this.iconsFun()} className="weatherPhoto" /></div>
                    <div className="cityNameAndTemp">
                        <div>{this.props.CityStore.city}</div>
                        <div>{this.props.CityStore.currentTemp}C°</div>
                    </div>
                </div>
                <div className="box-second">
                    <FormGroup row>   
                        <FormControlLabel
                            className="favoriteIcon"
                            onChange={this.handleChange}
                            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" />}
                            label="Add to favorite"
                        />
                    </FormGroup>
                </div>
            </div>
        );
    }
}

export default CityRow;