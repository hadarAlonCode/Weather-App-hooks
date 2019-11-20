import React from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/cityRow.scss"

const CityRow = inject("CityStore", "HeaderStore")(observer(function (props) {

        return (
            <div className="citySection">
                <div className="icon_temp">
                    <div><img alt="weather" src={props.CityStore.iconsFunc(props.CityStore.city.icon)} className="weatherPhoto" /></div>
                    <div className="citySection_temp">{props.HeaderStore.celsiusType ? props.CityStore.city.currentTemp + "°C" : props.HeaderStore.celToFer(props.CityStore.city.currentTemp)}</div>
                </div>
                <div className="citySection_city_text">
                    <div className="city_name">{props.CityStore.city.name}</div>
                    <div className="line"></div>
                    <div className="city_weather">{props.CityStore.city.weatherText}</div>
                </div>
            </div>
        );  
}))

export default CityRow;