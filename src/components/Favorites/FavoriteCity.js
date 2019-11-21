import React, { useEffect } from 'react';
import "../../styles/components/favoriteCity.scss"
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const FavoriteCity = inject("CityStore", "FavoriteStore", "HeaderStore")(observer(function (props) {

    const getCity = () => {
        props.CityStore.getCurrentWeather(props.city.name, props.city.key)
    }

    const dateChecker = () => {
        if (moment(props.city.conditions.date).format('L') !== moment(Date.now()).format('L')) {
            props.FavoriteStore.updateDate(props.city.conditions.date, props.city.key, props.city.name)
        }
    }

    useEffect(() => {
        dateChecker()
    }, [])

    return (
        <Link style={{ textDecoration: 'none' }} to='/' onClick={getCity}>
            <div className="favorite_city_box">
                <div className="favorite_name">{props.city.name}</div>
                <div className="favorite_temp">{props.HeaderStore.celsiusType ? props.city.conditions.currentTemp + "°C" : props.HeaderStore.celToFer(props.city.conditions.currentTemp)} </div>
                <div className="favorite_icon"><img alt="Weather Icon" src={props.CityStore.iconsFunc(props.city.conditions.icon)} /></div>
                <div className="favorite_text">{props.city.conditions.weatherText}</div>
            </div>
        </Link>
    );
}))

export default FavoriteCity;