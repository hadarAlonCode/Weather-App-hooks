import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import "../../Style/Main.css"

import Input from './Input';
import CityRow from './CityRow';
import FiveDays from './FiveDays';

@inject("CityStore")
@observer



class Main extends Component {
    render() {
        return (
            <div>
                <Input />
                <div className="weatherBox">
                   <div className="cityRow">
                       <CityRow />
                   </div>
                   <div className="weatherTextRow">{this.props.CityStore.weatherText}</div>
                   <div className="fiveDaysRow">
                       {this.props.CityStore.fiveDays.map(d=> <FiveDays day={d} key={d.id} />)}
                   </div>
                </div>


                {/* <div>{this.props.CityStore.city}</div>
                <div>{this.props.CityStore.cityKey}</div>
                <div>{this.props.CityStore.weatherText}</div>
                <div>{this.props.CityStore.currentTemp}</div>
                <div>{this.props.CityStore.unit}</div> */}

            </div>
        );
    }
}

export default Main;