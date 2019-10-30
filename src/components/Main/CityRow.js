import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../styles/components/cityRow.scss"


@inject("CityStore")
@observer

class CityRow extends Component {

    constructor() {
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





    render() {

        return (
            <div className="citySection">
                <div className="citySection_icon">
                    <div><img src={this.iconsFun()} className="weatherPhoto" /></div>
                </div>
                <div className="citySection_city_text">
                    <div className="city_name">{this.props.CityStore.city}</div>
                    <div className="line"></div>
                    <div className="city_weather">{this.props.CityStore.weatherText}</div>
                </div>
                <div className="citySection_temp">
                    <div>{this.props.CityStore.currentTemp}C°</div>
                </div>
            </div>
        );
    }
}

export default CityRow;