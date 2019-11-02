import React, { Component } from 'react';
import "../../styles/components/favoriteCity.scss"
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import moment from 'moment'




@inject("CityStore", "FavoriteStore")
@observer

class FavoriteCity extends Component {


    getCity = () => {
        this.props.CityStore.getCurrentWeather(this.props.city.name, this.props.city.key)
    }

    iconsFunc = () => {
        if (this.props.city.conditions.icon <= 9) {
            return "https://developer.accuweather.com/sites/default/files/0" + this.props.city.conditions.icon + "-s.png"
        } else {
            return "https://developer.accuweather.com/sites/default/files/" + this.props.city.conditions.icon + "-s.png"
        }
    }

    dateChecker = () => {
        if( moment(this.props.city.conditions.date).format('L') !== moment(Date.now()).format('L')){
            this.props.FavoriteStore.updateDate(this.props.city.conditions.date ,this.props.city.key, this.props.city.name)
        }
    }

    componentDidMount = () => {
      this.dateChecker()
    }


    render() {

        return (
            <Link style={{ textDecoration: 'none' }} to='/' onClick={this.getCity}>
                <div className="favorite_city_box">
                    <div className="favorite_name">{this.props.city.name}</div>
                    <div className="favorite_temp">{this.props.city.conditions.currentTemp}°C</div>
                    <div className="favorite_icon"><img alt="Weather Icon" src={this.iconsFunc()} className="" /></div>
                    <div className="favorite_text">{this.props.city.conditions.weatherText}</div>
                </div>


            </Link>

        );
    }
}

export default FavoriteCity;