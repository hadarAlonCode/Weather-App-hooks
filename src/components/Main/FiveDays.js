import React from 'react';
import moment from 'moment'
import "../../styles/components/fiveDays.scss"
import { observer, inject } from 'mobx-react'

const FiveDays = inject("CityStore", "HeaderStore")(observer(function (props) {
    return (
        <div className="dailyForecast">
            <div className="dateText" >{moment(props.day.day).format('ddd')}</div>
            <div className="dateNumb">{moment(props.day.day).format('DD/MM')}</div>
            <div className="dailyForecast_icon"><img alt="weather icon" src={props.CityStore.iconsFunc(props.day.icon)} className="" /></div>
            <div className="dailyForecast_temp">{props.HeaderStore.celsiusType ? props.day.minTemp + "°C" : props.HeaderStore.celToFer(props.day.minTemp)}</div>
        </div>
    );
}))

export default FiveDays;