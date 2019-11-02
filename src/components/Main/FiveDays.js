import React, { Component } from 'react';
import moment from 'moment'
import "../../styles/components/fiveDays.scss"

class FiveDays extends Component {

    iconsFunc = () => {
        if (this.props.day.icon <= 9) {
            return "https://developer.accuweather.com/sites/default/files/0" + this.props.day.icon + "-s.png"
        } else {
            return "https://developer.accuweather.com/sites/default/files/" + this.props.day.icon + "-s.png"
        }
    }

    render() {

        return (
            <div className="dailyForecast">
               <div className="dateText" >{moment(this.props.day.day).format('ddd')}</div> 
               <div className="dateNumb">{moment(this.props.day.day).format('DD/MM')}</div> 
               <div className="dailyForecast_icon"><img alt="weather icon" src={this.iconsFunc()} className="" /></div>
               <div className="dailyForecast_temp">{this.props.day.minTemp} °C</div> 
            </div>
        );
    }
}

export default FiveDays;