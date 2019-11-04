import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/cityRow.scss"


@inject("CityStore", "HeaderStore")
@observer

class CityRow extends Component {



    render() {

        return (
            <div className="citySection">
                <div className="icon_temp">
                    <div><img alt="weather" src={this.props.CityStore.iconsFunc(this.props.CityStore.city.icon)} className="weatherPhoto" /></div>
                    <div className="citySection_temp">{this.props.HeaderStore.celsiusType ? this.props.CityStore.city.currentTemp + "°C" : this.props.HeaderStore.celToFer(this.props.CityStore.city.currentTemp)}</div>
                </div>
                <div className="citySection_city_text">
                    <div className="city_name">{this.props.CityStore.city.name}</div>
                    <div className="line"></div>
                    <div className="city_weather">{this.props.CityStore.city.weatherText}</div>
                </div>
            </div>
        );
    }
}

export default CityRow;