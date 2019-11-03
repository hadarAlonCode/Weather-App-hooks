import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/cityRow.scss"


@inject("CityStore", "HeaderStore")
@observer

class CityRow extends Component {

   

    iconsFunc = () => {
        if (this.props.CityStore.city.icon <= 9) {
            return "https://developer.accuweather.com/sites/default/files/0" + this.props.CityStore.city.icon + "-s.png"
        } else {
            return "https://developer.accuweather.com/sites/default/files/" + this.props.CityStore.city.icon + "-s.png"
        }
    }



    render() {

        return (
            <div className="citySection">
                <div className="icon_temp">
                    <div><img alt="weather" src={this.iconsFunc()} className="weatherPhoto" /></div>
                    <div className="citySection_temp">{this.props.HeaderStore.celsiusType ?   this.props.CityStore.city.currentTemp +"°C" : this.props.HeaderStore.celToFer(this.props.CityStore.city.currentTemp) }</div>

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