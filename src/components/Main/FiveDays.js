import React, { Component } from 'react';
import moment from 'moment'
import "../../styles/components/fiveDays.scss"
import { observer, inject } from 'mobx-react'


@inject("HeaderStore", "CityStore")
@observer


class FiveDays extends Component {


    render() {

        return (
            <div className="dailyForecast">
                <div className="dateText" >{moment(this.props.day.day).format('ddd')}</div>
                <div className="dateNumb">{moment(this.props.day.day).format('DD/MM')}</div>
                <div className="dailyForecast_icon"><img alt="weather icon" src={this.props.CityStore.iconsFunc(this.props.day.icon)} className="" /></div>
                <div className="dailyForecast_temp">{this.props.HeaderStore.celsiusType ? this.props.day.minTemp + "°C" : this.props.HeaderStore.celToFer(this.props.day.minTemp)}</div>
            </div>
        );
    }
}

export default FiveDays;